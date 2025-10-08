 // Form functionality
        document.addEventListener('DOMContentLoaded', function() {
            const signInForm = document.getElementById('signInForm');
            const errorMessage = document.getElementById('errorMessage');
            const successMessage = document.getElementById('successMessage');
            const passwordToggle = document.getElementById('passwordToggle');
            const passwordInput = document.getElementById('password');

            // Password toggle functionality
            passwordToggle.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                this.classList.toggle('fa-eye');
                this.classList.toggle('fa-eye-slash');
            });

            // Form submission
            signInForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                
                // Basic validation
                if (!email || !password) {
                    showError('Please fill in all fields');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showError('Please enter a valid email address');
                    return;
                }
                
                // Simulate authentication (in a real app, this would be an API call)
                simulateAuthentication(email, password);
            });

            // Social auth buttons
            document.querySelectorAll('.social-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const provider = this.querySelector('span').textContent;
                    showError(`${provider} authentication is not implemented in this demo`);
                });
            });

            function showError(message) {
                errorMessage.style.display = 'flex';
                document.getElementById('errorText').textContent = message;
                
                // Hide error after 5 seconds
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 5000);
            }

            function simulateAuthentication(email, password) {
                // Show loading state
                const submitButton = signInForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
                submitButton.disabled = true;
                
                // Simulate API call delay
                setTimeout(() => {
                    // Demo credentials for testing
                    const demoCredentials = [
                        { email: 'demo@nexusai.com', password: 'demo123' },
                        { email: 'test@example.com', password: 'test123' },
                        { email: 'user@nexusai.com', password: 'password' }
                    ];
                    
                    const isValid = demoCredentials.some(cred => 
                        cred.email === email && cred.password === password
                    );
                    
                    if (isValid) {
                        // Success
                        signInForm.style.display = 'none';
                        successMessage.style.display = 'block';
                        
                        // Simulate redirect
                        setTimeout(() => {
                            // In a real app, this would redirect to the dashboard
                            alert('Success! Redirecting to dashboard...');
                            // window.location.href = 'dashboard.html';
                        }, 2000);
                    } else {
                        // Error
                        showError('Invalid email or password. Please try again.');
                        submitButton.textContent = originalText;
                        submitButton.disabled = false;
                    }
                }, 1500);
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
            const animatedElements = document.querySelectorAll('.auth-content, .auth-form-container');
            animatedElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });
