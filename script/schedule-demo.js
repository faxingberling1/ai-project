// Calendar functionality
        document.addEventListener('DOMContentLoaded', function() {
            let currentDate = new Date();
            let selectedDate = null;
            let selectedTime = null;

            // Generate calendar
            function generateCalendar(date) {
                const calendar = document.getElementById('calendar');
                calendar.innerHTML = '';

                // Add weekday headers
                const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                weekdays.forEach(day => {
                    const dayElement = document.createElement('div');
                    dayElement.className = 'calendar-weekday';
                    dayElement.textContent = day;
                    calendar.appendChild(dayElement);
                });

                // Get first day of month and number of days
                const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
                const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
                const daysInMonth = lastDay.getDate();
                const startingDay = firstDay.getDay();

                // Add empty cells for days before the first day of the month
                for (let i = 0; i < startingDay; i++) {
                    const emptyDay = document.createElement('div');
                    emptyDay.className = 'calendar-day other-month';
                    calendar.appendChild(emptyDay);
                }

                // Add days of the month
                for (let i = 1; i <= daysInMonth; i++) {
                    const dayElement = document.createElement('div');
                    dayElement.className = 'calendar-day available';
                    dayElement.textContent = i;
                    dayElement.dataset.date = `${date.getFullYear()}-${date.getMonth() + 1}-${i}`;

                    // Mark some days as unavailable (for demo purposes)
                    if (Math.random() > 0.7) {
                        dayElement.classList.remove('available');
                        dayElement.classList.add('unavailable');
                    }

                    dayElement.addEventListener('click', function() {
                        if (this.classList.contains('available')) {
                            // Remove selected class from all days
                            document.querySelectorAll('.calendar-day').forEach(day => {
                                day.classList.remove('selected');
                            });
                            
                            // Add selected class to clicked day
                            this.classList.add('selected');
                            selectedDate = this.dataset.date;
                            
                            // Update form field
                            document.getElementById('preferredDate').value = formatDate(selectedDate);
                            
                            // Generate time slots
                            generateTimeSlots();
                        }
                    });

                    calendar.appendChild(dayElement);
                }
            }

            // Generate time slots
            function generateTimeSlots() {
                const timeSlotsContainer = document.getElementById('timeSlots');
                timeSlotsContainer.innerHTML = '';

                const timeSlots = [
                    '9:00 AM', '10:00 AM', '11:00 AM', 
                    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
                ];

                timeSlots.forEach(time => {
                    const timeSlot = document.createElement('div');
                    timeSlot.className = 'time-slot';
                    timeSlot.textContent = time;
                    timeSlot.dataset.time = time;

                    timeSlot.addEventListener('click', function() {
                        // Remove selected class from all time slots
                        document.querySelectorAll('.time-slot').forEach(slot => {
                            slot.classList.remove('selected');
                        });
                        
                        // Add selected class to clicked time slot
                        this.classList.add('selected');
                        selectedTime = this.dataset.time;
                        
                        // Update form field
                        document.getElementById('preferredTime').value = selectedTime;
                    });

                    timeSlotsContainer.appendChild(timeSlot);
                });
            }

            // Format date for display
            function formatDate(dateString) {
                const date = new Date(dateString);
                return date.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
            }

            // Initialize calendar
            generateCalendar(currentDate);

            // Calendar navigation
            document.getElementById('prevMonth').addEventListener('click', function() {
                currentDate.setMonth(currentDate.getMonth() - 1);
                generateCalendar(currentDate);
            });

            document.getElementById('nextMonth').addEventListener('click', function() {
                currentDate.setMonth(currentDate.getMonth() + 1);
                generateCalendar(currentDate);
            });

            // Form submission
            document.getElementById('demoForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // In a real application, you would send the form data to a server here
                // For this demo, we'll just show the success message
                
                // Hide form and show success message
                this.style.display = 'none';
                document.getElementById('successMessage').style.display = 'block';
                
                // Scroll to success message
                document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
            });

            // FAQ functionality
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
            const animatedElements = document.querySelectorAll('.demo-form-container, .calendar-container, .benefit-card, .faq-item, .cta-content');
            animatedElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });
