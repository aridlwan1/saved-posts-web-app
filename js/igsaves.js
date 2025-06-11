document.addEventListener('DOMContentLoaded', function() {
    const postsGrid = document.getElementById('posts-grid');
    const errorContainer = document.getElementById('error-container');
    const modal = document.getElementById('post-modal');
    const modalClose = document.getElementById('modal-close');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');

    // Sample posts data (simulating API response)
    const posts = [
        {
            id: 1,
            image_url: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Adventure seeker on the mountain peak'
        },
        {
            id: 2,
            image_url: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Suspension bridge through the forest'
        },
        {
            id: 3,
            image_url: 'https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Underwater world with dolphins'
        },
        {
            id: 4,
            image_url: 'https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Palm trees reaching for the sky'
        },
        {
            id: 5,
            image_url: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Majestic mountain lake at sunrise'
        },
        {
            id: 6,
            image_url: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Abstract rainbow colors in motion'
        },
        {
            id: 7,
            image_url: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Sunset through the mountains'
        },
        {
            id: 8,
            image_url: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Urban architecture reflections'
        },
        {
            id: 9,
            image_url: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Peaceful lake surrounded by nature'
        },
        {
            id: 10,
            image_url: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Mountain peaks in winter'
        },
        {
            id: 11,
            image_url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'City lights at dusk'
        },
        {
            id: 12,
            image_url: 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Autumn forest path'
        },
        {
            id: 13,
            image_url: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Beach sunset paradise'
        },
        {
            id: 14,
            image_url: 'https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Mountain cabin retreat'
        },
        {
            id: 15,
            image_url: 'https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Desert rock formations'
        },
        {
            id: 16,
            image_url: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Forest waterfall'
        },
        {
            id: 17,
            image_url: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Coffee and workspace'
        },
        {
            id: 18,
            image_url: 'https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Northern lights display'
        },
        {
            id: 19,
            image_url: 'https://images.pexels.com/photos/3293149/pexels-photo-3293149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Mountain lake reflection'
        },
        {
            id: 20,
            image_url: 'https://images.pexels.com/photos/1770808/pexels-photo-1770808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            caption: 'Sunset over valley'
        }
    ];

    // Function to render posts
    function renderPosts() {
        try {
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post-item bg-gray-50';
                postElement.innerHTML = `
                    <div class="aspect-square">
                        <img src="${post.image_url}" 
                             alt="${post.caption}" 
                             class="w-full h-full object-cover"
                             loading="lazy">
                    </div>
                `;

                // Add click event to open modal
                postElement.addEventListener('click', () => {
                    openModal(post);
                });

                postsGrid.appendChild(postElement);
            });
        } catch (error) {
            console.error('Error rendering posts:', error);
            showError('Failed to load posts. Please try again later.');
        }
    }

    // Function to open modal
    function openModal(post) {
        modalImage.src = post.image_url;
        modalImage.alt = post.caption;
        modalCaption.textContent = post.caption;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    // Function to close modal
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        // Clear the image source to prevent memory leaks
        modalImage.src = '';
    }

    // Function to show error
    function showError(message) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = message;
        errorContainer.classList.remove('hidden');
    }

    // Event Listeners
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Handle escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Initialize
    renderPosts();
});
