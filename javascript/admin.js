 
        const sections = document.querySelectorAll('section');
        const homeLink = document.getElementById('home-link');
        const accountLink = document.getElementById('account-link');
        const subscriptionLink = document.getElementById('subscription-link');
        const settingsLink = document.getElementById('settings-link');

       
        function hideAllSections() {
            sections.forEach(section => {
                section.style.display = 'none';
            });
        }

        // Event listeners for menu links
        homeLink.addEventListener('click', function () {
            hideAllSections();
            document.getElementById('home-section').style.display = 'block';
        });

        accountLink.addEventListener('click', function () {
            hideAllSections();
            document.getElementById('account-section').style.display = 'block';
        });

        subscriptionLink.addEventListener('click', function () {
            hideAllSections();
            document.getElementById('subscription-section').style.display = 'block';
        });

        settingsLink.addEventListener('click', function () {
            hideAllSections();
            document.getElementById('settings-section').style.display = 'block';
        });