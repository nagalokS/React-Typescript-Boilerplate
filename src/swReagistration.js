import { Workbox } from 'workbox-window';

export function registerSerwiceWorker() {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js');

    wb.addEventListener('installed', (e) => {
      if (e.isUpdate) {
        if (confirm('New Version')) {
          window.location.reload();
        }
      }
    });

    wb.register();
  }
}
