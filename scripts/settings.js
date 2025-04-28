document.addEventListener('DOMContentLoaded', () => {
    // Initialize all sliders
    const initSlider = (sliderId, valueId) => {
        const slider = document.getElementById(sliderId);
        const valueDisplay = document.getElementById(valueId);
        
        slider.addEventListener('input', (e) => {
            valueDisplay.textContent = e.target.value;
        });
        
        return { slider, valueDisplay };
    };

    const resolution = initSlider('resolutionScale', 'resolutionValue');
    const masterVolume = initSlider('masterVolume', 'masterVolumeValue');
    const musicVolume = initSlider('musicVolume', 'musicVolumeValue');

    // Load saved settings
    const loadSettings = () => {
        const defaultSettings = {
            resolutionScale: 100,
            masterVolume: 80,
            musicVolume: 70,
            controls: {
                player1: { up: 'w', down: 's', left: 'a', right: 'd', punch: 'q', block: ' ' },
                player2: { up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight', punch: 'e', block: 'Enter' }
            }
        };
        
        const savedSettings = JSON.parse(localStorage.getItem('gameSettings')) || {};
        return { ...defaultSettings, ...savedSettings };
    };

    // Apply settings to UI
    const applySettings = (settings) => {
        resolution.slider.value = settings.resolutionScale;
        resolution.valueDisplay.textContent = settings.resolutionScale;
        
        masterVolume.slider.value = settings.masterVolume;
        masterVolume.valueDisplay.textContent = settings.masterVolume;
        
        musicVolume.slider.value = settings.musicVolume;
        musicVolume.valueDisplay.textContent = settings.musicVolume;
    };

    // Save settings
    const saveSettings = () => {
        const settings = {
            resolutionScale: parseInt(resolution.slider.value),
            masterVolume: parseInt(masterVolume.slider.value),
            musicVolume: parseInt(musicVolume.slider.value),
            controls: loadSettings().controls
        };
        
        localStorage.setItem('gameSettings', JSON.stringify(settings));
        
        // Show save confirmation
        const saveBtn = document.querySelector('button.bg-blue-600');
        const originalText = saveBtn.innerHTML;
        saveBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Saved!';
        setTimeout(() => {
            saveBtn.innerHTML = originalText;
        }, 2000);
    };

    // Initialize
    applySettings(loadSettings());
    
    // Event listeners
    document.querySelector('button.bg-blue-600').addEventListener('click', saveSettings);
});