        // User type selection
        let selectedUserType = 'developer';

        function selectUserType(type) {
            selectedUserType = type;
            
            // Update UI
            document.querySelectorAll('.user-type-card').forEach(card => {
                card.classList.remove('selected');
            });
            event.currentTarget.classList.add('selected');
            
            // Show appropriate steps
            if (type === 'developer') {
                document.getElementById('developer-steps').classList.remove('hidden');
                document.getElementById('customer-steps').classList.add('hidden');
            } else {
                document.getElementById('developer-steps').classList.add('hidden');
                document.getElementById('customer-steps').classList.remove('hidden');
            }
            
            // Scroll to steps
            scrollToSection('developer-steps');
        }

        // Smooth scrolling function
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Developer functions
        function createDeveloperAccount() {
            alert('Creating developer account... Redirecting to developer signup.');
            // In a real app: window.location.href = '/signup/developer';
        }

        function showDeveloperPlans() {
            alert('Showing developer plans...');
            // In a real app: window.location.href = '/pricing#developer';
        }

        function showDocumentation() {
            alert('Opening documentation...');
            // In a real app: window.location.href = '/docs';
        }

        function showAPIDemo() {
            alert('Loading API demo...');
            // In a real app: window.location.href = '/api-demo';
        }

        function openSandbox() {
            alert('Opening development sandbox...');
            // In a real app: window.location.href = '/sandbox';
        }

        function showDeploymentOptions() {
            alert('Showing deployment options...');
            // In a real app: window.location.href = '/deployment';
        }

        function showBestPractices() {
            alert('Showing best practices guide...');
            // In a real app: window.location.href = '/best-practices';
        }

        // Customer functions
        function showCustomerPlans() {
            alert('Showing business plans... Redirecting to pricing.');
            // In a real app: window.location.href = '/pricing';
        }

        function startFreeTrial() {
            alert('Starting 14-day free trial... Redirecting to signup.');
            // In a real app: window.location.href = '/signup/trial';
        }

        function setupBusinessAccount() {
            alert('Launching business setup wizard...');
            // In a real app: window.location.href = '/setup/business';
        }

        function importBusinessData() {
            alert('Opening data import tool...');
            // In a real app: window.location.href = '/import';
        }

        function browseAITools() {
            alert('Browsing AI tools catalog...');
            // In a real app: window.location.href = '/ai-tools';
        }

        function showUseCases() {
            alert('Showing business use cases...');
            // In a real app: window.location.href = '/use-cases';
        }

        function showSuccessStories() {
            alert('Showing customer success stories...');
            // In a real app: window.location.href = '/success-stories';
        }

        function contactCustomerSuccess() {
            alert('Connecting you with customer success...');
            // In a real app: window.location.href = '/contact/success';
        }

        // Quick start functions
        function startWithTutorial() {
            alert('Starting guided tutorial...');
            // In a real app: window.location.href = '/tutorials/beginner';
        }

        function useTemplate(templateType) {
            alert(`Loading ${templateType} template...`);
            // In a real app: window.location.href = `/templates/${templateType}`;
        }

        function bookDemo() {
            alert('Opening demo scheduler...');
            // In a real app: window.location.href = '/demo';
        }

        function createAccount() {
            if (selectedUserType === 'developer') {
                createDeveloperAccount();
            } else {
                startFreeTrial();
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Set developer as default
            const developerCard = document.querySelector('.developer');
            if (developerCard) {
                developerCard.classList.add('selected');
            }

            // Add scroll animations
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
            const animatedElements = document.querySelectorAll('.user-type-card, .step-card, .option-card, .cta-content');
            animatedElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });
