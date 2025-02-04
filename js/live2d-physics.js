document.addEventListener('DOMContentLoaded', () => {
  const interval = setInterval(() => {
    if (window.L2Dwidget) {
      clearInterval(interval);
      // 强制重新加载物理引擎
      window.L2Dwidget.init({
        model: {
          scale: 1,
          physics: true
        }
      });
    }
  }, 500);
});
