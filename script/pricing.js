// Add scroll animations
        document.addEventListener('DOMContentLoaded', function() {
            // Add scroll event listener for fade-in animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe elements for animation
            const animatedElements = document.querySelectorAll('.plan-card, .faq-item, .enterprise-content, .cta-content');
            animatedElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });

            // Billing toggle functionality
            const billingToggle = document.getElementById('billingToggle');
            const monthlyLabels = document.querySelectorAll('.toggle-label');
            const priceAmounts = document.querySelectorAll('.price-amount');
            const pricePeriods = document.querySelectorAll('.price-period');
            
            billingToggle.addEventListener('change', function() {
                if (this.checked) {
                    // Switch to annual pricing
                    monthlyLabels[0].classList.remove('active');
                    monthlyLabels[1].classList.add('active');
                    
                    priceAmounts[0].textContent = '$24';
                    priceAmounts[1].textContent = '$63';
                    priceAmounts[2].textContent = '$159';
                    
                    pricePeriods.forEach(period => {
                        period.textContent = '/month';
                    });
                } else {
                    // Switch to monthly pricing
                    monthlyLabels[0].classList.add('active');
                    monthlyLabels[1].classList.remove('active');
                    
                    priceAmounts[0].textContent = '$29';
                    priceAmounts[1].textContent = '$79';
                    priceAmounts[2].textContent = '$199';
                    
                    pricePeriods.forEach(period => {
                        period.textContent = '/month';
                    });
                }
            });

            // FAQ accordion functionality
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                item.addEventListener('click', function() {
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== this) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    this.classList.toggle('active');
                });
            });
        });
