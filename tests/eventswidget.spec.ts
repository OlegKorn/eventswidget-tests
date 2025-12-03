import { test, expect } from '@playwright/test';
import { EventsWidgetPage } from './page-objects/EventsWidgetPage';

test.describe('Events Widget Tests', () => {
  let eventsPage: EventsWidgetPage;

  test.beforeEach(async ({ page }) => {
    eventsPage = new EventsWidgetPage(page);
    await eventsPage.goto();
  });

  test('Page loads successfully', async () => {
    await expect(eventsPage.page).toHaveURL(/eventswidget/);
    await expect(eventsPage.page).toHaveTitle(/Events/); // Адаптируйте на реальный title
  });

  test('Widget container is visible', async () => {
    await eventsPage.waitForWidgetLoad();
    await expect(eventsPage.widgetContainer).toBeVisible();
  });

  test('Events are loaded and displayed', async () => {
    await eventsPage.waitForWidgetLoad();
    const count = await eventsPage.getEventCount();
    expect(count).toBeGreaterThan(0); // Предполагаем, что события есть
  });

  test('Filter interaction works', async () => {
    await eventsPage.waitForWidgetLoad();
    await eventsPage.clickFilter();
    // Дополнительные проверки после клика, если применимо
    await expect(eventsPage.eventItems.first()).toBeVisible();
  });

  test('No console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await eventsPage.goto();
    await eventsPage.waitForWidgetLoad();
    expect(errors.length).toBe(0);
  });
});
