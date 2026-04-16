// Optional: Add download tracking or analytics
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // You can add analytics here if needed
            console.log('Game download initiated');
            
            // Optional: Show a loading message
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '⏳ PREPARING DOWNLOAD...';
            downloadBtn.style.opacity = '0.7';
            
            // Reset after 2 seconds (actual download starts immediately)
            setTimeout(() => {
                downloadBtn.innerHTML = originalText;
                downloadBtn.style.opacity = '1';
            }, 2000);
        });
    }
});