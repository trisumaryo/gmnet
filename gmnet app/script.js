/**
 * Custom Premium Toast Notification System
 * @param {string} message - The text to display
 * @param {string} type - 'error', 'success', or 'warning'
 * @param {number} duration - Time in ms before auto-closing (0 for manual)
 */
function showToast(message, type = 'error', duration = 3000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    
    // Icon mapping
    let iconSvg = '';
    if (type === 'error') {
        iconSvg = '<svg class="toast-icon text-red-500" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/></svg>';
    } else if (type === 'success') {
        iconSvg = '<svg class="toast-icon text-[#1ed760]" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>';
    } else {
        iconSvg = '<svg class="toast-icon text-[#1ed760]" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/></svg>';
    }


    toast.innerHTML = `
        ${iconSvg}
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Auto close
    if (duration > 0) {
        setTimeout(() => {
            toast.classList.add('exit');
            toast.addEventListener('animationend', () => toast.remove());
        }, duration);
    }

    // Manual close on click
    toast.onclick = () => {
        toast.classList.add('exit');
        toast.addEventListener('animationend', () => toast.remove());
    };
}

document.addEventListener('DOMContentLoaded', () => {

    // Password Toggle
    const passwordInput = document.getElementById('passwordInput');
    const togglePasswordBtn = document.getElementById('togglePasswordBtn');

    if (passwordInput && togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', () => {
            const eyeIconPath = document.getElementById('eyeIconPath');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            if (type === 'text') {
                togglePasswordBtn.classList.add('text-[#1ed760]');
                togglePasswordBtn.classList.remove('text-gray-400');
                // New eye icon path (24x24)
                eyeIconPath.setAttribute('d', 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z');
            } else {
                togglePasswordBtn.classList.add('text-gray-400');
                togglePasswordBtn.classList.remove('text-[#1ed760]');
                // New eye-slash icon path (24x24)
                eyeIconPath.setAttribute('d', 'M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.82l2.93 2.93c1.51-1.29 2.7-2.9 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.73 10.03 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z');
            }

        });
    }

    // Hamburger Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerIconPath = document.getElementById('hamburgerIconPath');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
                hamburgerIconPath.setAttribute('d', 'M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                hamburgerIconPath.setAttribute('d', 'M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3');
            }
        });

        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                hamburgerIconPath.setAttribute('d', 'M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3');
            }
        });
    }

    // --- Indicator Logic ---
    function updateIndicator(indicator, activeElement) {
        if (!indicator || !activeElement) return;
        indicator.style.width = `${activeElement.offsetWidth}px`;
        indicator.style.left = `${activeElement.offsetLeft}px`;
    }





    function initIndicator(indicatorId, activeSelector) {
        const indicator = document.getElementById(indicatorId);
        const activeElement = document.querySelector(activeSelector);
        if (indicator && activeElement) {
            // Initial positioning - multiple attempts for mobile layout stability
            updateIndicator(indicator, activeElement);
            setTimeout(() => updateIndicator(indicator, activeElement), 100);
            setTimeout(() => updateIndicator(indicator, activeElement), 500);
            
            // Re-position on resize
            window.addEventListener('resize', () => updateIndicator(indicator, activeElement));
        }
    }




    // Login Tabs Logic
    const memberTab = document.getElementById('memberTab');
    const voucherTab = document.getElementById('voucherTab');
    const memberFields = document.getElementById('memberFields');
    const voucherFields = document.getElementById('voucherFields');
    const tabIndicator = document.getElementById('tabIndicator');

    if (memberTab && voucherTab) {
        const mikrotikError = document.getElementById('mikrotikError');
        
        // Initial state check
        if (mikrotikError) {
            const isVoucher = voucherFields && !voucherFields.classList.contains('hidden');
            if (isVoucher) mikrotikError.style.display = 'none';
        }

        // Initialize Tab Indicator
        if (voucherFields) {
            const initialTab = voucherFields.classList.contains('hidden') ? memberTab : voucherTab;
            initIndicator('tabIndicator', `#${initialTab.id}`);
        }


        memberTab.addEventListener('click', () => {
            // Switch to Member
            memberFields.classList.remove('hidden');
            voucherFields.classList.add('hidden');
            if (mikrotikError) mikrotikError.style.display = 'flex';
            
            // UI Updates
            memberTab.classList.add('text-white');
            memberTab.classList.remove('text-gray-400');
            voucherTab.classList.add('text-gray-400');
            voucherTab.classList.remove('text-white');
            
            updateIndicator(tabIndicator, memberTab);
        });

        voucherTab.addEventListener('click', () => {
            // Switch to Voucher
            memberFields.classList.add('hidden');
            voucherFields.classList.remove('hidden');
            if (mikrotikError) mikrotikError.style.display = 'none';
            
            // UI Updates
            voucherTab.classList.add('text-white');
            voucherTab.classList.remove('text-gray-400');
            memberTab.classList.add('text-gray-400');
            memberTab.classList.remove('text-white');
            
            updateIndicator(tabIndicator, voucherTab);
        });
    }
});


// --- Mikrotik Login Logic ---
function doLogin() {
    const memberFields = document.getElementById('memberFields');
    const voucherFields = document.getElementById('voucherFields');
    const isVoucherActive = voucherFields && !voucherFields.classList.contains('hidden');
    
    const form = document.forms.sendin;
    if (!form) return false;

    let user = "";
    let pass = "";

    if (isVoucherActive) {
        // Voucher mode
        const voucherInput = document.querySelector('input[name="username_voucher"]');
        if (!voucherInput || voucherInput.value.trim() === "") {
            showToast("Silakan masukan kode voucher Anda.", "warning");
            return false;
        }

        user = voucherInput.value;
        pass = user; // In many voucher setups, password is same as username
    } else {
        // Member mode
        const mainUsernameInput = document.querySelector('input[name="username"]');
        const mainPasswordInput = document.querySelector('input[name="password"]');
        
        if (!mainUsernameInput || mainUsernameInput.value.trim() === "") {
            showToast("Silakan masukan username Anda.", "warning");
            return false;
        }

        
        user = mainUsernameInput.value;
        pass = mainPasswordInput ? mainPasswordInput.value : "";
    }

    // Set the main username field for Mikrotik
    form.username.value = user;

    // Handle Password Hashing (CHAP)
    // If CHAP is enabled, Mikrotik sends chap-id and chap-challenge
    if (form["chap-id"] && form["chap-challenge"]) {
        form.password.value = hexMD5(form["chap-id"].value + pass + form["chap-challenge"].value);
    } else {
        // Fallback to plain text if CHAP is not enabled
        form.password.value = pass;
    }

    return true;
}


// Compact hexMD5 implementation (Standard for Mikrotik)
function hexMD5(s) {
    function hex(n) { var s = "", v; for (var i = 7; i >= 0; i--) { v = (n >>> (i * 4)) & 0xf; s += v.toString(16); } return s; }
    function rotateLeft(n, s) { return (n << s) | (n >>> (32 - s)); }
    function add(x, y) { var l = (x & 0xffff) + (y & 0xffff), m = (x >> 16) + (y >> 16) + (l >> 16); return (m << 16) | (l & 0xffff); }
    function ff(a, b, c, d, x, s, t) { return add(rotateLeft(add(a, add(add(b & c | ~b & d, x), t)), s), b); }
    function gg(a, b, c, d, x, s, t) { return add(rotateLeft(add(a, add(add(b & d | c & ~d, x), t)), s), b); }
    function hh(a, b, c, d, x, s, t) { return add(rotateLeft(add(a, add(add(b ^ c ^ d, x), t)), s), b); }
    function ii(a, b, c, d, x, s, t) { return add(rotateLeft(add(a, add(add(c ^ (b | ~d), x), t)), s), b); }
    function coreMD5(x, len) {
        x[len >> 5] |= 0x80 << (len % 32); x[(((len + 64) >>> 9) << 4) + 14] = len;
        var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
        for (var i = 0; i < x.length; i += 16) {
            var olda = a, oldb = b, oldc = c, oldd = d;
            a = ff(a, b, c, d, x[i + 0], 7, -680876936); d = ff(d, a, b, c, x[i + 1], 12, -389564586); c = ff(c, d, a, b, x[i + 2], 17, 606105819); b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = ff(a, b, c, d, x[i + 4], 7, -176418897); d = ff(d, a, b, c, x[i + 5], 12, 1200080426); c = ff(c, d, a, b, x[i + 6], 17, -1473231341); b = ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = ff(a, b, c, d, x[i + 8], 7, 1770035416); d = ff(d, a, b, c, x[i + 9], 12, -1958414417); c = ff(c, d, a, b, x[i + 10], 17, -42063); b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = ff(a, b, c, d, x[i + 12], 7, 1804603682); d = ff(d, a, b, c, x[i + 13], 12, -40341101); c = ff(c, d, a, b, x[i + 14], 17, -1502002290); b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = gg(a, b, c, d, x[i + 1], 5, -165796510); d = gg(d, a, b, c, x[i + 6], 9, -1069501632); c = gg(c, d, a, b, x[i + 11], 14, 643717713); b = gg(b, c, d, a, x[i + 0], 20, -373897302);
            a = gg(a, b, c, d, x[i + 5], 5, -701558691); d = gg(d, a, b, c, x[i + 10], 9, 38016083); c = gg(c, d, a, b, x[i + 15], 14, -660478335); b = gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = gg(a, b, c, d, x[i + 9], 5, 568446438); d = gg(d, a, b, c, x[i + 14], 9, -1019803690); c = gg(c, d, a, b, x[i + 3], 14, -187363961); b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = gg(a, b, c, d, x[i + 13], 5, -1444681467); d = gg(d, a, b, c, x[i + 2], 9, -51403784); c = gg(c, d, a, b, x[i + 7], 14, 1735328473); b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = hh(a, b, c, d, x[i + 5], 4, -378558); d = hh(d, a, b, c, x[i + 8], 11, -2022574463); c = hh(c, d, a, b, x[i + 11], 16, 1839030562); b = hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = hh(a, b, c, d, x[i + 1], 4, -1530992060); d = hh(d, a, b, c, x[i + 4], 11, 1272893353); c = hh(c, d, a, b, x[i + 7], 16, -155497632); b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = hh(a, b, c, d, x[i + 13], 4, 681279174); d = hh(d, a, b, c, x[i + 0], 11, -358537222); c = hh(c, d, a, b, x[i + 3], 16, -722521979); b = hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = hh(a, b, c, d, x[i + 9], 4, -640364487); d = hh(d, a, b, c, x[i + 12], 11, -421815835); c = hh(c, d, a, b, x[i + 15], 16, 530742520); b = hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = ii(a, b, c, d, x[i + 0], 6, -198630844); d = ii(d, a, b, c, x[i + 7], 10, 1126891415); c = ii(c, d, a, b, x[i + 14], 15, -1416354905); b = ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = ii(a, b, c, d, x[i + 12], 6, 1700485571); d = ii(d, a, b, c, x[i + 3], 10, -1894946606); c = ii(c, d, a, b, x[i + 10], 15, -1051523); b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = ii(a, b, c, d, x[i + 8], 6, 1873313359); d = ii(d, a, b, c, x[i + 15], 10, -30611744); c = ii(c, d, a, b, x[i + 6], 15, -1560198380); b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = ii(a, b, c, d, x[i + 4], 6, -145523070); d = ii(d, a, b, c, x[i + 11], 10, -1120210379); c = ii(c, d, a, b, x[i + 2], 15, 718787280); b = ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = add(a, olda); b = add(b, oldb); c = add(c, oldc); d = add(d, oldd);
        }
        return [a, b, c, d];
    }
    function str2binl(str) { var bin = []; var mask = (1 << 8) - 1; for (var i = 0; i < str.length * 8; i += 8) bin[i >> 5] |= (str.charCodeAt(i / 8) & mask) << (i % 32); return bin; }
    function binl2hex(binarray) { var hex_tab = "0123456789abcdef"; var str = ""; for (var i = 0; i < binarray.length * 4; i++) str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xf) + hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xf); return str; }
    return binl2hex(coreMD5(str2binl(s), s.length * 8));
}
