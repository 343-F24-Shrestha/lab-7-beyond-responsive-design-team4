document.querySelector('#light').addEventListener('click', () => {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
});

document.querySelector('#dark').addEventListener('click', () => {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
});

document.querySelector('#default').addEventListener('click', () => {
    document.body.classList.remove('dark', 'light');
});
