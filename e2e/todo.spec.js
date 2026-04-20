const { test, expect } = require('@playwright/test');
const path = require('path');

const filePath = 'file://' + path.resolve(__dirname, '../index.html').replace(/\\/g, '/');

test('головна сторінка відкривається і показує заголовок TaskFlow', async ({ page }) => {
  await page.goto(filePath);
  await expect(page).toHaveTitle('TaskFlow — To-Do App');
});

test('користувач може додати нову задачу', async ({ page }) => {
  await page.goto(filePath);
  await page.fill('#taskInput', 'Тестова задача');
  await page.click('button.btn-add');
  await expect(page.locator('.task-text').last()).toContainText('Тестова задача');
});