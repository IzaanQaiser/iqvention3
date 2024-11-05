// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Services data
const services = [
    {
        icon: 'globe',
        title: 'Web Development',
        description: 'Custom websites that convert visitors into customers'
    },
    {
        icon: 'search',
        title: 'SEO Optimization',
        description: 'Boost your search rankings and organic traffic'
    },
    {
        icon: 'share-2',
        title: 'Digital Marketing',
        description: 'Strategic campaigns that drive real results'
    },
    {
        icon: 'smartphone',
        title: 'Mobile Solutions',
        description: 'Responsive designs for all devices'
    },
    {
        icon: 'zap',
        title: 'Performance',
        description: 'Lightning-fast loading speeds'
    },
    {
        icon: 'rocket',
        title: 'Growth Strategy',
        description: 'Data-driven approaches to scale your business'
    }
];

// Populate services
const servicesGrid = document.querySelector('.services-grid');
services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.innerHTML = `
        <i data-lucide="${service.icon}" class="service-icon"></i>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;
    servicesGrid.appendChild(serviceCard);
});

// Stats data
const stats = [
    { icon: 'users', value: '10+', label: 'Satisfied Customers' },
    { icon: 'globe', value: '40+', label: 'Salvaged Websites' },
    { icon: 'gauge', value: '58%', label: 'Avg. Speed Increase' },
    { icon: 'line-chart', value: '125%', label: 'Revenue Growth' }
];

// Populate stats
const statsGrid = document.querySelector('.stats-grid');
stats.forEach(stat => {
    const statItem = document.createElement('div');
    statItem.className = 'stat-item';
    statItem.innerHTML = `
        <i data-lucide="${stat.icon}"></i>
        <h3 class="counter">${stat.value}</h3>
        <p>${stat.label}</p>
    `;
    statsGrid.appendChild(statItem);
});

// Testimonials data
const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, TechStart',
        content: 'IQvention transformed our online presence completely. Our conversion rates have increased by 150% since the redesign.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
        name: 'Michael Chen',
        role: 'Founder, GrowthLabs',
        content: 'The SEO optimization services provided by IQvention helped us reach the top of Google search results. Incredible results!',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
        name: 'Emily Davis',
        role: 'Marketing Director, Innovate Inc',
        content: 'Working with IQvention has been a game-changer for our digital marketing strategy. They truly understand our needs.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    }
];

// Populate testimonials
const testimonialsCarousel = document.querySelector('.testimonials-carousel');
testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
        <div class="testimonial-header">
            <img src="${testimonial.image}" alt="${testimonial.name}">
            <div>
                <h4>${testimonial.name}</h4>
                <p>${testimonial.role}</p>
            </div>
        </div>
        <p>${testimonial.content}</p>
        <div class="rating">
            ${'★'.repeat(5)}
        </div>
    `;
    testimonialsCarousel.appendChild(testimonialCard);
});

// Pricing data
const packages = [
    {
        name: 'Starter',
        price: '$999',
        features: [
            'Custom Website Design',
            'Mobile Responsive',
            'Basic SEO Setup',
            'Contact Form',
            '5 Pages'
        ]
    },
    {
        name: 'Professional',
        price: '$2,499',
        features: [
            'Everything in Starter',
            'Advanced SEO',
            'E-commerce Integration',
            'Content Management System',
            'Social Media Integration',
            '15 Pages'
        ],
        popular: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'Everything in Professional',
            'Custom Functionality',
            'Priority Support',
            'Marketing Strategy',
            'Analytics Dashboard',
            'Unlimited Pages'
        ]
    }
];

// Populate pricing
const pricingGrid = document.querySelector('.pricing-grid');
packages.forEach(pkg => {
    const pricingCard = document.createElement('div');
    pricingCard.className = `pricing-card ${pkg.popular ? 'popular' : ''}`;
    pricingCard.innerHTML = `
        <h3>${pkg.name}</h3>
        <div class="price">${pkg.price}</div>
        <ul>
            ${pkg.features.map(feature => `
                <li>
                    <i data-lucide="check-circle"></i>
                    ${feature}
                </li>
            `).join('')}
        </ul>
        <button class="btn ${pkg.popular ? 'btn-primary' : 'btn-outline'}">
            Get Started
            <i data-lucide="chevron-right"></i>
        </button>
    `;
    pricingGrid.appendChild(pricingCard);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Initialize ScrollReveal for animations
ScrollReveal().reveal('.service-card', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    interval: 100
});

ScrollReveal().reveal('.stat-item', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    interval: 100
});

ScrollReveal().reveal('.testimonial-card', {
    delay: 200,
    distance: '20px',
    origin: 'bottom'
});

ScrollReveal().reveal('.pricing-card', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    interval: 100
});

// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();