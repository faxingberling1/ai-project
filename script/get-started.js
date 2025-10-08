 // Smooth scrolling function
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Account type selection
        function selectAccountType(type) {
            // Remove selected class from all cards
            document.querySelectorAll('.type-card').forEach(card => {
                card.classList.remove('selected');
                const button = card.querySelector('button');
                button.classList.remove('btn-primary');
                button.classList.add('btn-outline');
                button.textContent = button.textContent.replace('Selected', 'Select');
            });

            // Add selected class to clicked card
            const selectedCard = event.currentTarget;
            selectedCard.classList.add('selected');
            const button = selectedCard.querySelector('button');
            button.classList.remove('btn-outline');
            button.classList.add('btn-primary');
            
            if (type === 'developer') {
                button.textContent = 'Selected - Developer';
            } else if (type === 'team') {
                button.textContent = 'Selected - Team';
            } else if (type === 'enterprise') {
                button.textContent = 'Contact Sales';
            }

            // Store selection
            localStorage.setItem('selectedAccountType', type);
        }

        // Quick start functions
        function startWithTutorial() {
            alert('Starting guided tutorial... Redirecting to tutorial page.');
            // In a real app: window.location.href = '/tutorials/beginner';
        }

        function useTemplate(templateType) {
            alert(`Loading ${templateType} template... This will open in the workspace.`);
            // In a real app: window.location.href = `/templates/${templateType}`;
        }

        function startFromScratch() {
            alert('Opening blank workspace... Ready to build!');
            // In a real app: window.location.href = '/workspace/new';
        }

        function createAccount() {
            const selectedType = localStorage.getItem('selectedAccountType') || 'team';
            alert(`Creating your ${selectedType} account... Redirecting to sign up.`);
            // In a real app: window.location.href = `/signup?type=${selectedType}`;
        }

        // Demo functions for step actions
        function showAccountTypes() {
            scrollToSection('account-types');
        }

        function showSignupOptions() {
            alert('Sign up options: Email, Google, GitHub, or Microsoft account.');
        }

        function showSetupWizard() {
            alert('Launching setup wizard... This will guide you through initial configuration.');
        }

        function showWorkspaceDemo() {
            alert('Opening workspace demo... Showing interactive tour of features.');
        }

        function showTutorials() {
            alert('Opening tutorials library... Browse our collection of learning resources.');
        }

        function showTemplates() {
            alert('Opening template gallery... Explore our pre-built AI solutions.');
        }

        // Initialize default selection
        document.addEventListener('DOMContentLoaded', function() {
            // Set team as default selected
            const teamCard = document.querySelector('.type-card:nth-child(2)');
            if (teamCard) {
                teamCard.classList.add('selected');
                const button = teamCard.querySelector('button');
                button.classList.remove('btn-outline');
                button.classList.add('btn-primary');
                button.textContent = 'Selected - Team';
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
            const animatedElements = document.querySelectorAll('.step-card, .type-card, .option-card, .cta-content');
            animatedElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });
