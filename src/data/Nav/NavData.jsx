import React from 'react'

const NavData = (userType) => {

    const navData = {
        superAdmin: [
            {
                pageName: 'Overview',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.765 2.13012L2.7225 5.28012C2.0475 5.80512 1.5 6.92262 1.5 7.77012V13.3276C1.5 15.0676 2.9175 16.4926 4.6575 16.4926H13.3425C15.0825 16.4926 16.5 15.0676 16.5 13.3351V7.87512C16.5 6.96762 15.8925 5.80512 15.15 5.28762L10.515 2.04012C9.465 1.30512 7.7775 1.34262 6.765 2.13012Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.34" d="M9 13.4924V11.2424" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>,
                link:'/',
                end:true
            },
            {
                pageName: 'Insight',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M11.625 13.875C12.45 13.875 13.125 13.2 13.125 12.375V5.625C13.125 4.8 12.45 4.125 11.625 4.125C10.8 4.125 10.125 4.8 10.125 5.625V12.375C10.125 13.2 10.7925 13.875 11.625 13.875Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M6.375 13.875C7.2 13.875 7.875 13.2 7.875 12.375V9.75C7.875 8.925 7.2 8.25 6.375 8.25C5.55 8.25 4.875 8.925 4.875 9.75V12.375C4.875 13.2 5.5425 13.875 6.375 13.875Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                link:'/insight',
                end:false
            },
            {
                pageName: 'Store Manager',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.87004 8.1525C6.79504 8.145 6.70504 8.145 6.62254 8.1525C4.83754 8.0925 3.42004 6.63 3.42004 4.83C3.42004 2.9925 4.90504 1.5 6.75004 1.5C8.58754 1.5 10.08 2.9925 10.08 4.83C10.0725 6.63 8.65504 8.0925 6.87004 8.1525Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M12.3075 3C13.7625 3 14.9325 4.1775 14.9325 5.625C14.9325 7.0425 13.8075 8.1975 12.405 8.25C12.345 8.2425 12.2775 8.2425 12.21 8.25" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.12004 10.92C1.30504 12.135 1.30504 14.115 3.12004 15.3225C5.18254 16.7025 8.56504 16.7025 10.6275 15.3225C12.4425 14.1075 12.4425 12.1275 10.6275 10.92C8.57254 9.5475 5.19004 9.5475 3.12004 10.92Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M13.755 15C14.295 14.8875 14.805 14.67 15.225 14.3475C16.395 13.47 16.395 12.0225 15.225 11.145C14.8125 10.83 14.31 10.62 13.7775 10.5" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                link:'/store-manager',
                end:false
            },
            {
                pageName: 'Brand Manager',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M9.27747 6.65991H13.215" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M4.78503 6.65991L5.34753 7.22241L7.03503 5.53491" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M9.27747 11.9099H13.215" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M4.78503 11.9099L5.34753 12.4724L7.03503 10.7849" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                link:'/brand-manager',
                end:false
            },
            {
                pageName: 'Campaign Manager',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37479 16.5003H3.05979C2.18979 16.5003 1.47729 15.8028 1.47729 14.9478V3.81776C1.47729 1.85276 2.93979 0.960262 4.7323 1.83776L8.06229 3.47276C8.78229 3.82526 9.37479 4.76276 9.37479 5.55776V16.5003Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.4773 11.2952V14.1302C16.4773 15.7502 15.7273 16.5002 14.1073 16.5002H9.37476V7.81519L9.72726 7.89019L13.1023 8.64769L14.6248 8.98519C15.6148 9.20269 16.4248 9.71269 16.4698 11.1527C16.4773 11.1977 16.4773 11.2427 16.4773 11.2952Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M4.12476 6.75024H6.72726" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M4.12476 9.75024H6.72726" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.1023 8.64788V11.0629C13.1023 11.9929 12.3448 12.7504 11.4148 12.7504C10.4848 12.7504 9.72729 11.9929 9.72729 11.0629V7.89038L13.1023 8.64788Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.4698 11.1527C16.4248 12.0377 15.6898 12.7502 14.7898 12.7502C13.8598 12.7502 13.1023 11.9927 13.1023 11.0627V8.64771L14.6248 8.9852C15.6148 9.2027 16.4248 9.71271 16.4698 11.1527Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                link:'/campaign-manager',
                end:false
            },
            {
                pageName: 'Eco-bag Producer',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.34" d="M9.11255 12.375V13.95" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.36255 16.5H12.8625V15.75C12.8625 14.925 12.1875 14.25 11.3625 14.25H6.86255C6.03755 14.25 5.36255 14.925 5.36255 15.75V16.5V16.5Z" stroke="#AFAFAF" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M4.61255 16.5H13.6125" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 12C6.0975 12 3.75 9.6525 3.75 6.75V4.5C3.75 2.8425 5.0925 1.5 6.75 1.5H11.25C12.9075 1.5 14.25 2.8425 14.25 4.5V6.75C14.25 9.6525 11.9025 12 9 12Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.34" d="M4.10253 8.73745C3.54003 8.55745 3.04503 8.22745 2.65503 7.83745C1.98003 7.08745 1.53003 6.18745 1.53003 5.13745C1.53003 4.08745 2.35503 3.26245 3.40503 3.26245H3.89253C3.74253 3.60745 3.66753 3.98995 3.66753 4.38745V6.63745C3.66753 7.38745 3.82503 8.09245 4.10253 8.73745Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.34" d="M13.8975 8.73745C14.46 8.55745 14.955 8.22745 15.345 7.83745C16.02 7.08745 16.47 6.18745 16.47 5.13745C16.47 4.08745 15.645 3.26245 14.595 3.26245H14.1075C14.2575 3.60745 14.3325 3.98995 14.3325 4.38745V6.63745C14.3325 7.38745 14.175 8.09245 13.8975 8.73745Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                link:'/eco-bag-producer',
                end:false
            },
            {
                pageName: 'Impact',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.34" d="M9.11255 12.375V13.95" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.36255 16.5H12.8625V15.75C12.8625 14.925 12.1875 14.25 11.3625 14.25H6.86255C6.03755 14.25 5.36255 14.925 5.36255 15.75V16.5V16.5Z" stroke="#AFAFAF" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M4.61255 16.5H13.6125" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 12C6.0975 12 3.75 9.6525 3.75 6.75V4.5C3.75 2.8425 5.0925 1.5 6.75 1.5H11.25C12.9075 1.5 14.25 2.8425 14.25 4.5V6.75C14.25 9.6525 11.9025 12 9 12Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.34" d="M4.10253 8.73745C3.54003 8.55745 3.04503 8.22745 2.65503 7.83745C1.98003 7.08745 1.53003 6.18745 1.53003 5.13745C1.53003 4.08745 2.35503 3.26245 3.40503 3.26245H3.89253C3.74253 3.60745 3.66753 3.98995 3.66753 4.38745V6.63745C3.66753 7.38745 3.82503 8.09245 4.10253 8.73745Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.34" d="M13.8975 8.73745C14.46 8.55745 14.955 8.22745 15.345 7.83745C16.02 7.08745 16.47 6.18745 16.47 5.13745C16.47 4.08745 15.645 3.26245 14.595 3.26245H14.1075C14.2575 3.60745 14.3325 3.98995 14.3325 4.38745V6.63745C14.3325 7.38745 14.175 8.09245 13.8975 8.73745Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                link:'/impact',
                end:false
            }
        ],
        user: [
            {
                pageName: 'Home',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.765 2.13012L2.7225 5.28012C2.0475 5.80512 1.5 6.92262 1.5 7.77012V13.3276C1.5 15.0676 2.9175 16.4926 4.6575 16.4926H13.3425C15.0825 16.4926 16.5 15.0676 16.5 13.3351V7.87512C16.5 6.96762 15.8925 5.80512 15.15 5.28762L10.515 2.04012C9.465 1.30512 7.7775 1.34262 6.765 2.13012Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.34" d="M9 13.4924V11.2424" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>,
                link:'/',
                end:true
            },
            {
                pageName: 'Community',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M15.4416 16.5C15.4416 13.5975 12.5541 11.25 8.99914 11.25C5.44414 11.25 2.55664 13.5975 2.55664 16.5" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                link:'/community',
                end:false
            },
            {
                pageName: 'Activities',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M9.27734 6.66016H13.2148" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M4.78516 6.66016L5.34766 7.22266L7.03516 5.53516" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M9.27734 11.9102H13.2148" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M4.78516 11.9102L5.34766 12.4727L7.03516 10.7852" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>,
                link:'/activities',
                end:false
            },
            {
                pageName: 'Store',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37406 16.5003H3.05906C2.18906 16.5003 1.47656 15.8028 1.47656 14.9478V3.81776C1.47656 1.85276 2.93906 0.960262 4.73156 1.83776L8.06156 3.47276C8.78156 3.82526 9.37406 4.76276 9.37406 5.55776V16.5003Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.4775 11.2954V14.1304C16.4775 15.7504 15.7275 16.5004 14.1075 16.5004H9.375V7.81543L9.7275 7.89043L13.1025 8.64793L14.625 8.98543C15.615 9.20293 16.425 9.71293 16.47 11.1529C16.4775 11.1979 16.4775 11.2429 16.4775 11.2954Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M4.125 6.75049H6.7275" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M4.125 9.75049H6.7275" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.1016 8.64764V11.0626C13.1016 11.9926 12.3441 12.7501 11.4141 12.7501C10.4841 12.7501 9.72656 11.9926 9.72656 11.0626V7.89014L13.1016 8.64764Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.4691 11.1529C16.4241 12.0379 15.6891 12.7504 14.7891 12.7504C13.8591 12.7504 13.1016 11.9929 13.1016 11.0629V8.64795L14.6241 8.98545C15.6141 9.20295 16.4241 9.71295 16.4691 11.1529Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                link:'/store',
                end:false
            },
            {
                pageName: 'Inventory',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.34" d="M9.11328 12.375V13.95" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.36328 16.5H12.8633V15.75C12.8633 14.925 12.1883 14.25 11.3633 14.25H6.86328C6.03828 14.25 5.36328 14.925 5.36328 15.75V16.5V16.5Z" stroke="#AFAFAF" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M4.61328 16.5H13.6133" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 12C6.0975 12 3.75 9.6525 3.75 6.75V4.5C3.75 2.8425 5.0925 1.5 6.75 1.5H11.25C12.9075 1.5 14.25 2.8425 14.25 4.5V6.75C14.25 9.6525 11.9025 12 9 12Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.34" d="M4.1018 8.7377C3.5393 8.5577 3.0443 8.2277 2.6543 7.8377C1.9793 7.0877 1.5293 6.1877 1.5293 5.1377C1.5293 4.0877 2.3543 3.2627 3.4043 3.2627H3.8918C3.7418 3.6077 3.6668 3.9902 3.6668 4.3877V6.6377C3.6668 7.3877 3.8243 8.0927 4.1018 8.7377Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.34" d="M13.8984 8.7377C14.4609 8.5577 14.9559 8.2277 15.3459 7.8377C16.0209 7.0877 16.4709 6.1877 16.4709 5.1377C16.4709 4.0877 15.6459 3.2627 14.5959 3.2627H14.1084C14.2584 3.6077 14.3334 3.9902 14.3334 4.3877V6.6377C14.3334 7.3877 14.1759 8.0927 13.8984 8.7377Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                link:'/inventory',
                end:false
            }
        ],
        partner: [
            {
                pageName: 'Home',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.765 2.13012L2.7225 5.28012C2.0475 5.80512 1.5 6.92262 1.5 7.77012V13.3276C1.5 15.0676 2.9175 16.4926 4.6575 16.4926H13.3425C15.0825 16.4926 16.5 15.0676 16.5 13.3351V7.87512C16.5 6.96762 15.8925 5.80512 15.15 5.28762L10.515 2.04012C9.465 1.30512 7.7775 1.34262 6.765 2.13012Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.34" d="M9 13.4924V11.2424" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>,
                link:'/',
                end:true
            },
            {
                pageName: 'Discussion',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M15.4416 16.5C15.4416 13.5975 12.5541 11.25 8.99914 11.25C5.44414 11.25 2.55664 13.5975 2.55664 16.5" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                link:'/discussion',
                end:false
            },
            {
                pageName: 'Campaigns',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M9.27734 6.66016H13.2148" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M4.78516 6.66016L5.34766 7.22266L7.03516 5.53516" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M9.27734 11.9102H13.2148" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M4.78516 11.9102L5.34766 12.4727L7.03516 10.7852" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>,
                link:'/campaigns',
                end:false
            },
            {
                pageName: 'Inventory',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.37406 16.5003H3.05906C2.18906 16.5003 1.47656 15.8028 1.47656 14.9478V3.81776C1.47656 1.85276 2.93906 0.960262 4.73156 1.83776L8.06156 3.47276C8.78156 3.82526 9.37406 4.76276 9.37406 5.55776V16.5003Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.4775 11.2954V14.1304C16.4775 15.7504 15.7275 16.5004 14.1075 16.5004H9.375V7.81543L9.7275 7.89043L13.1025 8.64793L14.625 8.98543C15.615 9.20293 16.425 9.71293 16.47 11.1529C16.4775 11.1979 16.4775 11.2429 16.4775 11.2954Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M4.125 6.75049H6.7275" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M4.125 9.75049H6.7275" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.1016 8.64764V11.0626C13.1016 11.9926 12.3441 12.7501 11.4141 12.7501C10.4841 12.7501 9.72656 11.9926 9.72656 11.0626V7.89014L13.1016 8.64764Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.4691 11.1529C16.4241 12.0379 15.6891 12.7504 14.7891 12.7504C13.8591 12.7504 13.1016 11.9929 13.1016 11.0629V8.64795L14.6241 8.98545C15.6141 9.20295 16.4241 9.71295 16.4691 11.1529Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                link:'/inventory',
                end:false
            },
            {
                pageName: 'Impact',
                icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.34" d="M9.11328 12.375V13.95" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.36328 16.5H12.8633V15.75C12.8633 14.925 12.1883 14.25 11.3633 14.25H6.86328C6.03828 14.25 5.36328 14.925 5.36328 15.75V16.5V16.5Z" stroke="#AFAFAF" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M4.61328 16.5H13.6133" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 12C6.0975 12 3.75 9.6525 3.75 6.75V4.5C3.75 2.8425 5.0925 1.5 6.75 1.5H11.25C12.9075 1.5 14.25 2.8425 14.25 4.5V6.75C14.25 9.6525 11.9025 12 9 12Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.34" d="M4.1018 8.7377C3.5393 8.5577 3.0443 8.2277 2.6543 7.8377C1.9793 7.0877 1.5293 6.1877 1.5293 5.1377C1.5293 4.0877 2.3543 3.2627 3.4043 3.2627H3.8918C3.7418 3.6077 3.6668 3.9902 3.6668 4.3877V6.6377C3.6668 7.3877 3.8243 8.0927 4.1018 8.7377Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.34" d="M13.8984 8.7377C14.4609 8.5577 14.9559 8.2277 15.3459 7.8377C16.0209 7.0877 16.4709 6.1877 16.4709 5.1377C16.4709 4.0877 15.6459 3.2627 14.5959 3.2627H14.1084C14.2584 3.6077 14.3334 3.9902 14.3334 4.3877V6.6377C14.3334 7.3877 14.1759 8.0927 13.8984 8.7377Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>,
                link:'/impact',
                end:false
            }
        ]
    }

    const typedNavData = navData[userType || 'superAdmin']
    const userNav = "navData.user"
    const partnerNav = "navData.partner"

    // return { generalNav, userNav, partnerNav }

    return { typedNavData }

}



export default NavData