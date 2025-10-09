        // Demo category filtering
        document.querySelectorAll('.demo-category-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.demo-category-btn').forEach(b => {
                    b.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // In a real implementation, this would filter the displayed demos
                const category = this.getAttribute('data-category');
                console.log(`Filtering by category: ${category}`);
            });
        });

        // Video placeholder click handler
        document.getElementById('main-video').addEventListener('click', function() {
            // In a real implementation, this would play a video
            alert('Video player would launch here. In a real implementation, this would embed a video player.');
        });

        // Interactive chatbot functionality
        document.getElementById('send-message').addEventListener('click', sendMessage);
        document.getElementById('chat-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        function sendMessage() {
            const input = document.getElementById('chat-input');
            const message = input.value.trim();
            
            if (message) {
                // Add user message
                addMessage(message, 'user');
                
                // Clear input
                input.value = '';
                
                // Simulate AI response after a short delay
                setTimeout(() => {
                    const response = generateAIResponse(message);
                    addMessage(response, 'bot');
                }, 1000);
            }
        }

        function addMessage(text, sender) {
            const messagesContainer = document.getElementById('chat-messages');
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', sender);
            messageElement.textContent = text;
            messagesContainer.appendChild(messageElement);
            
            // Scroll to bottom
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function generateAIResponse(userMessage) {
            const lowerMessage = userMessage.toLowerCase();
            
            if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
                return "Our pricing starts at $29/month for the Starter plan, $79/month for Professional, and $199/month for Enterprise. You can save 20% with annual billing. Would you like me to direct you to our pricing page?";
            } else if (lowerMessage.includes('feature') || lowerMessage.includes('capability') || lowerMessage.includes('what can you do')) {
                return "I can help with AI agents, chatbots, workflow automation, predictive analytics, natural language processing, and more. Our platform offers a comprehensive suite of AI tools to transform your business operations.";
            } else if (lowerMessage.includes('demo') || lowerMessage.includes('trial')) {
                return "You can start with a 14-day free trial of our Professional plan. No credit card required. Would you like me to help you set up an account?";
            } else if (lowerMessage.includes('agent') || lowerMessage.includes('automation')) {
                return "Our AI agents can autonomously execute complex tasks, make decisions, and learn from outcomes. They're perfect for workflow automation, customer service, data analysis, and more.";
            } else if (lowerMessage.includes('chatbot') || lowerMessage.includes('conversation')) {
                return "Our AI chatbots provide human-like conversations with natural language understanding. They can handle customer inquiries, provide support, and even complete transactions.";
            } else {
                return "I understand you're asking about: '" + userMessage + "'. As an AI assistant, I can provide information about Nexus AI services, pricing, features, and use cases. How else can I help you?";
            }
        }

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
            const animatedElements = document.querySelectorAll('.demo-card, .stat-card, .cta-content');
            animatedElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });
