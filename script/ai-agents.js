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
            const animatedElements = document.querySelectorAll('.type-card, .agent-card, .case-card, .cta-content, .demo-chat');
            animatedElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });

            // Chat simulation
            const chatInput = document.querySelector('.chat-input input');
            const chatMessages = document.querySelector('.chat-messages');
            
            chatInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
            
            document.querySelector('.chat-input .btn').addEventListener('click', sendMessage);
            
            function sendMessage() {
                const message = chatInput.value.trim();
                if (message === '') return;
                
                // Add user message
                const userMessage = document.createElement('div');
                userMessage.className = 'message user';
                userMessage.innerHTML = `<div class="message-content">${message}</div>`;
                chatMessages.appendChild(userMessage);
                
                // Clear input
                chatInput.value = '';
                
                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Simulate bot response after delay
                setTimeout(() => {
                    const responses = [
                        "I understand. Let me look into that for you.",
                        "Thanks for sharing that information. Here's what I can suggest...",
                        "I see. Based on your situation, I recommend the following steps...",
                        "That's a good question. Let me provide some information about that.",
                        "I can help with that. Here are a few options to consider..."
                    ];
                    
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    
                    const botMessage = document.createElement('div');
                    botMessage.className = 'message bot';
                    botMessage.innerHTML = `<div class="message-content">${randomResponse}</div>`;
                    chatMessages.appendChild(botMessage);
                    
                    // Scroll to bottom
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        });
