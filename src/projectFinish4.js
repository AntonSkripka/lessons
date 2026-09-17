const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const importBtn = document.getElementById('import-btn');
const addCardBtn = document.getElementById('add-card-btn');

const cardsGrid = document.getElementById('cards-grid');
const loader = document.getElementById('loader');
const emptyState = document.getElementById('empty-state');

const prevPageBtn = document.getElementById('prev-page-btn');
const nextPageBtn = document.getElementById('next-page-btn');
const pageIndicator = document.getElementById('page-indicator');
const paginationContainer = document.querySelector('.pagination-container');

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalCancelBtn = document.getElementById('modal-cancel-btn');

const cardForm = document.getElementById('card-form');
const cardIdInput = document.getElementById('card-id-input');
const cardTitleInput = document.getElementById('card-title-input');
const cardUrlInput = document.getElementById('card-url-input');
const cardTagsInput = document.getElementById('card-tags-input');

const imagePreviewModal = document.getElementById('image-preview-modal');
const imagePreviewEl = document.getElementById('image-preview-el');
const imagePreviewCloseBtn = document.getElementById('image-preview-close-btn');

const API_KEY = import.meta.env.VITE_API_KEY;
const PIXABAY_URL = "https://pixabay.com/api/";
const SERVER_URL = "http://localhost:3000/cards";

const PLACEHOLDER_IMAGE = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgNDAwIDI1MCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2UyZThmMCIvPjxnIGZpbGw9IiM5NGEzYjgiPjxwYXRoIGQ9Ik0xNzAgMTQwbDI1LTMwIDI1IDMwaC01MHogTTIxMCAxNDBsMjAtMjQgMjAgMjRoLTQweiIvPjxjaXJjbGUgY3g9IjE4NSIgY3k9Ijk1IiByPSIxMCIvPjwvZz48dGV4dCB4PSI1MCUiIHk9IjE4MCIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2NDc0OGIiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=";

window.handleImageError = function(img) {
  img.onerror = null;
  img.src = PLACEHOLDER_IMAGE;
  img.classList.add('img-error');
  img.removeAttribute('data-action');
};

let currentPage = 1;
const limitPerPage = 6;
let totalPages = 1;
let searchQuery = '';
let totalDbCards = 0;
const MAX_CARDS_LIMIT = 20 * limitPerPage;
let currentCards = [];
let pixabayImportPage = 1;
const MAX_PIXABAY_PAGES = 20;

async function apiGetCards(page = 1, limit = limitPerPage, query = '') {
  const trimmedQuery = query.trim();
  let url = `${SERVER_URL}?_page=${page}&_per_page=${limit}`;

  if (trimmedQuery !== '') {
    const lowerQuery = trimmedQuery.toLowerCase();
    const whereCondition = JSON.stringify({
      or: [
        { title: { contains: trimmedQuery } },
        { tags: { contains: lowerQuery } },
        { tags: { eq: lowerQuery } }
      ]
    });
    url += `&_where=${encodeURIComponent(whereCondition)}`;
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch cards');

  const result = await response.json();
  const totalCount = response.headers.get('X-Total-Count');

  return { result, totalCount };
}

async function apiGetAllCards() {
  const response = await fetch(SERVER_URL);
  if (!response.ok) throw new Error('Failed to fetch all cards');
  return await response.json();
}

async function apiCreateCard(cardData) {
  const response = await fetch(SERVER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cardData)
  });
  if (!response.ok) throw new Error('Failed to create card');
  return await response.json();
}

async function apiUpdateCard(id, patchData) {
  const response = await fetch(`${SERVER_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patchData)
  });
  if (!response.ok) throw new Error(`Failed to update card with id ${id}`);
  return await response.json();
}

async function apiDeleteCard(id) {
  const response = await fetch(`${SERVER_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error(`Failed to delete card with id ${id}`);
  return true;
}


function validateCardPayload(payload) {
  const errors = [];

  if (!payload.title || payload.title.length < 3 || payload.title.length > 50) {
    errors.push('Title must be between 3 and 50 characters.');
  }

  try {
    const parsedUrl = new URL(payload.imageUrl);

    if (parsedUrl.protocol !== 'https:') {
      errors.push('Image URL must start with https://');
    }

    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
    const hasImageExtension = allowedExtensions.some(ext =>
      parsedUrl.pathname.toLowerCase().endsWith(ext)
    );

    if (!hasImageExtension && !parsedUrl.hostname.includes('pixabay.com')) {
      errors.push('Image URL must point to a valid image file (.jpg, .png, .webp, .gif)');
    }

  } catch {
    errors.push('Please enter a valid URL.');
  }

  if (payload.tags.length > 30) {
    errors.push('Maximum 5 tags allowed.');
  }

  return errors;
}

function transformPixabayHits(hits) {
  return hits.map((item) => ({
    title: (item.tags.split(',')[0] || 'Photo').trim().slice(0, 50),
    imageUrl: item.webformatURL,
    tags: item.tags.split(',').map(t => t.trim().toLowerCase().slice(0, 15)).slice(0, 5),
    likes: item.likes,
    comments: []
  }));
}

function highlightText(text, query) {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return text;

  const escapedQuery = trimmedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');

  return text.replace(regex, '<mark class="highlight">$1</mark>');
}

async function checkDbLimit() {
  try {
    const { totalCount } = await apiGetCards(1, 1, '');
    if (totalCount) totalDbCards = Number(totalCount);
  } catch (e) {
    console.error('Check DB Limit Error:', e);
  }
}


async function fetchCards(page = 1, limit = limitPerPage, query = '') {
  try {
    loader.classList.remove('hidden');

    const { result, totalCount } = await apiGetCards(page, limit, query);

    let cards = [];
    if (Array.isArray(result)) {
      cards = result;
      totalPages = totalCount ? Math.ceil(Number(totalCount) / limit) : 1;
      if (query.trim() === '' && totalCount) {
        totalDbCards = Number(totalCount);
      }
    } else if (result && Array.isArray(result.data)) {
      cards = result.data;
      totalPages = result.pages || 1;

      if (query.trim() === '' && typeof result.items === 'number') {
        totalDbCards = result.items;
      }
    }

    return cards;
  } catch (error) {
    console.error('Fetch Error:', error);
    return [];
  } finally {
    loader.classList.add('hidden');
  }
}

async function handleImportPixabay() {
  await checkDbLimit();

  const totalDbPages = Math.ceil(totalDbCards / limitPerPage);
  if (totalDbPages >= 20) {
    alert('Import limit reached! The database already contains 20 pages of data.');
    return;
  }

  try {
    loader.classList.remove('hidden');

    const existingDbCards = await apiGetAllCards();
    const existingUrls = new Set(
      (Array.isArray(existingDbCards) ? existingDbCards : existingDbCards.data || [])
        .map(c => c.imageUrl)
    );

    let attempts = 0;
    let newCards = [];

    while (newCards.length === 0 && attempts < MAX_PIXABAY_PAGES) {
      const response = await fetch(
        `${PIXABAY_URL}?key=${API_KEY}&image_type=photo&per_page=24&page=${pixabayImportPage}&safesearch=true`
      );
      const data = await response.json();

      if (!data.hits || data.hits.length === 0 || pixabayImportPage >= MAX_PIXABAY_PAGES) {
        pixabayImportPage = 1;
      } else {
        pixabayImportPage++;
      }

      if (data.hits && data.hits.length > 0) {
        const formattedCards = transformPixabayHits(data.hits);
        newCards = formattedCards.filter(card => !existingUrls.has(card.imageUrl));
      }

      attempts++;
    }

    if (newCards.length === 0) {
      alert('Could not find any new unique images to import.');
      return;
    }

    for (const card of newCards) {
      const { id, ...cardPayload } = card;
      await apiCreateCard(cardPayload);
    }

    currentPage = 1;
    await loadAndRenderPage();
  } catch (error) {
    console.error('Import Error:', error);
  } finally {
    loader.classList.add('hidden');
  }
}

async function deleteCard(id) {
  try {
    await apiDeleteCard(id);

    if (currentCards.length === 1 && currentPage > 1) {
      currentPage--;
    }

    await loadAndRenderPage();
  } catch (e) {
    console.error('Delete Card Error:', e);
  }
}

async function addComment(cardId, commentText) {
  const cleanText = commentText.trim();

  if (!cleanText || cleanText.length > 150) {
    alert('Comment must be between 1 and 150 characters.');
    return;
  }

  const card = currentCards.find(c => String(c.id) === String(cardId));
  if (!card) return;

  const newComment = { id: Date.now().toString(), text: cleanText };
  const updatedComments = [...(card.comments || []), newComment];

  try {
    await apiUpdateCard(cardId, { comments: updatedComments });
    await loadAndRenderPage();
  } catch (e) {
    console.error('Add Comment Error:', e);
  }
}

async function deleteComment(cardId, commentId) {
  const card = currentCards.find(c => String(c.id) === String(cardId));
  if (!card) return;

  const updatedComments = (card.comments || []).filter(c => String(c.id) !== String(commentId));

  try {
    await apiUpdateCard(cardId, { comments: updatedComments });
    await loadAndRenderPage();
  } catch (e) {
    console.error('Delete Comment Error:', e);
  }
}


function openModal(isEdit = false, cardData = null) {
  modal.classList.remove('hidden');

  if (isEdit && cardData) {
    modalTitle.textContent = 'Edit Card';
    cardIdInput.value = cardData.id || '';
    cardTitleInput.value = cardData.title || '';
    cardUrlInput.value = cardData.imageUrl || '';
    cardTagsInput.value = Array.isArray(cardData.tags) ? cardData.tags.join(', ') : '';
  } else {
    modalTitle.textContent = 'Add New Card';
    cardForm.reset();
    cardIdInput.value = '';
  }
}

function closeModal() {
  modal.classList.add('hidden');
  cardForm.reset();
  cardIdInput.value = '';
}

function openImagePreviewModal(imageUrl, title) {
  imagePreviewModal.classList.remove('hidden');
  imagePreviewEl.src = imageUrl;
  imagePreviewEl.alt = title;
}

function closeImagePreviewModal() {
  imagePreviewModal.classList.add('hidden');
  imagePreviewEl.src = '';
  imagePreviewEl.alt = '';
}

function updatePaginationUI(cardsCount) {
  const totalDbPages = Math.ceil(totalDbCards / limitPerPage);

  if (totalDbPages >= 20 || totalDbCards >= MAX_CARDS_LIMIT) {
    importBtn.disabled = true;
    importBtn.title = "Import limit reached (Max 20 pages in database)";
  } else {
    importBtn.disabled = false;
    importBtn.title = "";
  }

  if (cardsCount === 0 || totalPages === 0) {
    paginationContainer.classList.add('hidden');
    return;
  }

  paginationContainer.classList.remove('hidden');
  pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
  prevPageBtn.disabled = currentPage <= 1;
  nextPageBtn.disabled = currentPage >= totalPages;
}

async function loadAndRenderPage() {
  currentCards = await fetchCards(currentPage, limitPerPage, searchQuery);
  DOMbuild(currentCards);
  updatePaginationUI(currentCards.length);
}

function DOMbuild(cards) {
  if (!cards || cards.length === 0) {
    cardsGrid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  const markup = cards.map((card) => {
    const markupComments = (card.comments || []).map((comment) => `
      <li class="comment-item">
        <span>${comment.text}</span>
        <button class="btn-icon" data-action="delete-comment" data-comment-id="${comment.id}">&times;</button>
      </li>
    `).join('');

    const formattedTags = Array.isArray(card.tags) ? card.tags.join(', ') : (card.tags || '');

    const highlightedTitle = highlightText(card.title, searchQuery);
    const highlightedTags = highlightText(formattedTags, searchQuery);

    return `
      <article class="card" data-id="${card.id}">
        <div class="card-image-wrapper">
          <img
            src="${card.imageUrl}"
            alt="${card.title}"
            class="card-img"
            data-action="preview-image"
            onerror="handleImageError(this)"
          />
        </div>
        <div class="card-content">
          <h3 class="card-title">${highlightedTitle}</h3>
          <p class="card-tags">${highlightedTags}</p>
          
          <div class="card-comments-section">
            <ul class="comments-list">
              ${markupComments}
            </ul>
            <form class="comment-form" data-action="add-comment">
              <input type="text" placeholder="Add comment..." maxlength="150" required />
              <button type="submit" class="btn btn-small">Send</button>
            </form>
          </div>

          <div class="card-actions">
            <button class="btn btn-small" data-action="edit">Edit</button>
            <button class="btn btn-danger btn-small" data-action="delete">Delete</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  cardsGrid.innerHTML = markup;
}


document.addEventListener("DOMContentLoaded", async () => {
  await loadAndRenderPage();
});

importBtn.addEventListener('click', handleImportPixabay);

prevPageBtn.addEventListener('click', async () => {
  if (currentPage > 1) {
    currentPage--;
    await loadAndRenderPage();
  }
});

nextPageBtn.addEventListener('click', async () => {
  if (currentPage < totalPages) {
    currentPage++;
    await loadAndRenderPage();
  }
});

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  searchQuery = searchInput.value;
  currentPage = 1;
  await loadAndRenderPage();
});

cardsGrid.addEventListener("click", async (e) => {
  const action = e.target.dataset.action;
  const cardElement = e.target.closest('[data-id]');
  if (!cardElement) return;

  const cardId = cardElement.dataset.id;
  const cardData = currentCards.find(card => String(card.id) === String(cardId));

  if (action === "delete") {
    await deleteCard(cardId);
  } else if (action === "edit") {
    if (cardData) openModal(true, cardData);
  } else if (action === "delete-comment") {
    const commentId = e.target.dataset.commentId;
    await deleteComment(cardId, commentId);
  } else if (action === "preview-image") {
    if (cardData) {
      openImagePreviewModal(cardData.imageUrl, cardData.title);
    }
  }
});

cardsGrid.addEventListener("submit", async (e) => {
  if (e.target.dataset.action === "add-comment") {
    e.preventDefault();
    const cardElement = e.target.closest('[data-id]');
    if (!cardElement) return;

    const input = e.target.querySelector('input');
    const commentText = input.value;

    if (commentText) {
      await addComment(cardElement.dataset.id, commentText);
    }
  }
});

addCardBtn.addEventListener('click', () => openModal(false));
modalCloseBtn.addEventListener('click', closeModal);
modalCancelBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

imagePreviewCloseBtn.addEventListener('click', closeImagePreviewModal);

imagePreviewModal.addEventListener('click', (e) => {
  if (e.target === imagePreviewModal) {
    closeImagePreviewModal();
  }
});

cardForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const activeId = cardIdInput ? cardIdInput.value.trim() : '';

  const rawTags = cardTagsInput.value
    .split(',')
    .map(t => t.trim().toLowerCase().replace(/[^a-z0-9-]/gi, ''))
    .filter(Boolean);

  const cardPayload = {
    title: cardTitleInput.value.trim(),
    imageUrl: cardUrlInput.value.trim(),
    tags: [...new Set(rawTags)]
  };

  const validationErrors = validateCardPayload(cardPayload);
  if (validationErrors.length > 0) {
    alert(validationErrors.join('\n'));
    return;
  }

  try {
    loader.classList.remove('hidden');

    if (activeId) {
      await apiUpdateCard(activeId, cardPayload);
    } else {
      cardPayload.likes = 0;
      cardPayload.comments = [];

      await apiCreateCard(cardPayload);
      currentPage = 1;
    }

    closeModal();
    await loadAndRenderPage();
  } catch (error) {
    console.error('Save Card Error:', error);
  } finally {
    loader.classList.add('hidden');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
    if (!imagePreviewModal.classList.contains('hidden')) {
      closeImagePreviewModal();
    }
  }
});