import { Page, Locator } from '@playwright/test';

export class EventsWidgetPage {
  readonly page: Page;
  readonly widgetContainer: Locator;
  readonly eventItems: Locator;
  readonly filterButton: Locator; // Предполагаем, что есть фильтр

  constructor(page: Page) {
    this.page = page;
    this.widgetContainer = page.locator('#events-widget'); // Адаптируйте селектор на основе реальной страницы
    this.eventItems = this.widgetContainer.locator('.event-item');
    this.filterButton = this.widgetContainer.locator('button.filter');
  }

  async goto() {
    await this.page.goto('/eventswidget/');
  }

  async waitForWidgetLoad() {
    await this.widgetContainer.waitFor({ state: 'visible', timeout: 10000 });
  }

  async getEventCount() {
    return await this.eventItems.count();
  }

  async clickFilter() {
    if (await this.filterButton.isVisible()) {
      await this.filterButton.click();
    }
  }
}
