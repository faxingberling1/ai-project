        // Chat functionality
        const chatMessages = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-btn');
        const newChatBtn = document.getElementById('new-chat-btn');
        const clearChatBtn = document.getElementById('clear-chat');
        const suggestQuestionBtn = document.getElementById('suggest-question');
        const exportChatBtn = document.getElementById('export-chat');

        // Auto-resize textarea
        chatInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
            
            // Enable/disable send button based on input
            sendBtn.disabled = this.value.trim() === '';
        });

        // Send message function
        function sendMessage() {
            const message = chatInput.value.trim();
            if (message) {
                // Add user message
                addMessage(message, 'user');
                
                // Clear input
                chatInput.value = '';
                chatInput.style.height = 'auto';
                sendBtn.disabled = true;
                
                // Show typing indicator
                showTypingIndicator();
                
                // Simulate AI response after a short delay
                setTimeout(() => {
                    removeTypingIndicator();
                    const response = generateAIResponse(message);
                    addMessage(response, 'bot');
                }, 1500 + Math.random() * 1000);
            }
        }

        // Add message to chat
        function addMessage(text, sender) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', sender);
            
            const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            
            messageElement.innerHTML = `
                <div class="message-avatar">${sender === 'user' ? 'U' : 'AI'}</div>
                <div class="message-content">
                    ${text}
                    <div class="message-time">${time}</div>
                </div>
            `;
            
            chatMessages.appendChild(messageElement);
            scrollToBottom();
        }

        // Show typing indicator
        function showTypingIndicator() {
            const typingElement = document.createElement('div');
            typingElement.classList.add('message', 'bot');
            typingElement.id = 'typing-indicator';
            typingElement.innerHTML = `
                <div class="message-avatar">AI</div>
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            `;
            
            chatMessages.appendChild(typingElement);
            scrollToBottom();
        }

        // Remove typing indicator
        function removeTypingIndicator() {
            const typingIndicator = document.getElementById('typing-indicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }
        }

        // Scroll to bottom of chat
        function scrollToBottom() {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Generate AI response
        function generateAIResponse(userMessage) {
            const lowerMessage = userMessage.toLowerCase();
            
            // Response templates based on user input
            if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
                return "Hello! I'm your Nexus AI assistant. How can I help you today?";
            } else if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
                return "Our pricing starts at $29/month for the Starter plan, $79/month for Professional, and $199/month for Enterprise. You can save 20% with annual billing. Would you like me to direct you to our pricing page?";
            } else if (lowerMessage.includes('feature') || lowerMessage.includes('capability') || lowerMessage.includes('what can you do')) {
                return "I can help with information about our AI services, answer questions, provide technical support, explain features, assist with integration options, and much more. I'm here to help with anything related to Nexus AI!";
            } else if (lowerMessage.includes('demo') || lowerMessage.includes('trial')) {
                return "You can start with a 14-day free trial of our Professional plan. No credit card required. Would you like me to help you set up an account?";
            } else if (lowerMessage.includes('integration') || lowerMessage.includes('api')) {
                return "We offer comprehensive APIs and SDKs for easy integration with your existing systems. We support REST APIs, webhooks, and have pre-built integrations for popular platforms like Slack, Discord, and WhatsApp.";
            } else if (lowerMessage.includes('support') || lowerMessage.includes('help')) {
                return "I can help with technical support issues. For more complex problems, our support team is available 24/7 via email at support@nexus-ai.com or through our live chat during business hours.";
            } else if (lowerMessage.includes('language') || lowerMessage.includes('translate')) {
                return "Our AI supports 50+ languages including English, Spanish, French, German, Chinese, Japanese, and many more. The chatbot automatically detects the user's language and responds accordingly.";
            } else {
                // Default response for unrecognized queries
                const defaultResponses = [
                    "I understand you're asking about: '" + userMessage + "'. I can provide information about Nexus AI services, features, pricing, and technical support. How else can I assist you?",
                    "That's an interesting question! While I'm specialized in Nexus AI services, I'd be happy to help with any questions about our products, pricing, or implementation.",
                    "I'm here to help with information about Nexus AI. Could you provide more details about what you'd like to know?",
                    "I'm designed to assist with Nexus AI-related inquiries. If you have questions about our services, features, or pricing, I'd be happy to help!"
                ];
                return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
            }
        }

        // Event listeners
        sendBtn.addEventListener('click', sendMessage);
        
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });

        newChatBtn.addEventListener('click', function() {
            if (chatMessages.children.length > 1) {
                if (confirm('Start a new chat? Your current conversation will be saved in history.')) {
                    // In a real implementation, this would save the current chat and start a new one
                    chatMessages.innerHTML = `
                        <div class="message bot">
                            <div class="message-avatar">AI</div>
                            <div class="message-content">
                                Hello! I'm your Nexus AI assistant. I can help you with information about our AI services, answer questions, provide technical support, and much more. How can I assist you today?
                                <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                            </div>
                        </div>
                    `;
                    chatInput.value = '';
                    chatInput.style.height = 'auto';
                    sendBtn.disabled = true;
                }
            }
        });

        clearChatBtn.addEventListener('click', function() {
            if (confirm('Clear the current chat? This action cannot be undone.')) {
                chatMessages.innerHTML = `
                    <div class="message bot">
                        <div class="message-avatar">AI</div>
                        <div class="message-content">
                            Hello! I'm your Nexus AI assistant. I can help you with information about our AI services, answer questions, provide technical support, and much more. How can I assist you today?
                            <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                        </div>
                    </div>
                `;
            }
        });

        suggestQuestionBtn.addEventListener('click', function() {
            const questions = [
                "What are the main features of your AI chatbots?",
                "How does the pricing work for different team sizes?",
                "Can I integrate the chatbot with my existing CRM?",
                "What languages does the chatbot support?",
                "How accurate is the natural language understanding?"
            ];
            
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            chatInput.value = randomQuestion;
            chatInput.style.height = 'auto';
            chatInput.style.height = (chatInput.scrollHeight) + 'px';
            sendBtn.disabled = false;
            chatInput.focus();
        });

        exportChatBtn.addEventListener('click', function() {
            alert('In a real implementation, this would export your chat history as a text file or PDF.');
        });

        // Initialize
        scrollToBottom();
