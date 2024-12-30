window.addEventListener("load", mostrarBannerCookies);
               

                function mostrarBannerCookies() {
                    
                const cookieBanner = document.getElementById('cookie-banner');
                const aceptarCookiesButton = document.getElementById('aceptar-cookies');
    
                aceptarCookiesButton.addEventListener('click', () => {
                cookieBanner.style.display = 'none';
                localStorage.setItem('cookiesAccepted', true);
                 });

                if (!localStorage.getItem('cookiesAccepted')) {
                 checkWindowSize();
                     }

                window.addEventListener("resize", checkWindowSize);

                function checkWindowSize() {
                 if (window.innerWidth < 768) {
                cookieBanner.style.display = 'none';
                    } else if (!localStorage.getItem('cookiesAccepted')) {
                cookieBanner.style.display = 'block';
                    }
                    }
                }