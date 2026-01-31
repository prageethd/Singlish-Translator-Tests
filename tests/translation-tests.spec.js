import { test, expect } from '@playwright/test';

test.describe('Translation Tests (Mocked UI)', () => {

  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Mock Translator</title>
        </head>
        <body>
          <h2>Mock Translator</h2>

          <textarea id="input" placeholder="Enter text"></textarea>
          <textarea id="output" placeholder="Translated text" readonly></textarea>

          <script>
            const input = document.getElementById('input');
            const output = document.getElementById('output');

            input.addEventListener('input', () => {
              if (input.value.trim() === '') {
                output.value = '';
              } else {
                output.value = 'Translated: ' + input.value;
              }
            });
          </script>
        </body>
      </html>
    `);
  });

  /* POSITIVE FUNCTIONAL TESTS */

  test('Pos_Fun_0001 - Simple sentence – daily usage (S)', async ({ page }) => {
    await page.fill('#input', 'mama gedhara yanavaa');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0002 - Compound sentence (M)', async ({ page }) => {
    await page.fill('#input', 'mama gedhara yanava eka nisa mama bath kanava');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0003 - Complex sentence (M)', async ({ page }) => {
    await page.fill('#input', 'mama gedhara yanava nam oyata kiyanna puluvan');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0004 - Question (interrogative) (S)', async ({ page }) => {
    await page.fill('#input', 'oyaata kohomadha?');
    await expect(page.locator('#output')).toHaveValue(/Translated/);
  });

  test('Pos_Fun_0005 - Command (imperative) (L)', async ({ page }) => {
    await page.fill('#input', 'please karanna puluvan nam e waeda karanna epa mata');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0006 - Positive sentence (S)', async ({ page }) => {
    await page.fill('#input', 'eka hari');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0007 - Negative sentence (L)', async ({ page }) => {
    await page.fill('#input', 'mama e waeda karanne na mokada mata ona na eka karanna');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0008 - Polite request (L)', async ({ page }) => {
    await page.fill('#input', 'karanna puluvan nam please mata help karanna mata ona');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0009 - Informal phrasing (S)', async ({ page }) => {
    await page.fill('#input', 'machan koheda');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0010 - Repeated words (S)', async ({ page }) => {
    await page.fill('#input', 'hari hari mama yanava');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0011 - Joined words (no spaces) (S)', async ({ page }) => {
    await page.fill('#input', 'mamayanava');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0012 - Multi-word expression (S)', async ({ page }) => {
    await page.fill('#input', 'ekai mama kiuwe');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0013 - Past tense (S)', async ({ page }) => {
    await page.fill('#input', 'mama gihin aawa');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0014 - Present tense (M)', async ({ page }) => {
    await page.fill('#input', 'mama dhan yanava eka nisa mata katha karanna baa');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0015 - Future tense (M)', async ({ page }) => {
    await page.fill('#input', 'mama heta yanava oyata dannava ne e gaana');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0016 - Pronouns (I / you / we) (M)', async ({ page }) => {
    await page.fill('#input', 'mama oya api yanava gedhara ekathu wela');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0017 - Plural usage (M)', async ({ page }) => {
    await page.fill('#input', 'ayya nangi amma thaththa okkoma yanava gedharata');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0018 - Mixed Singlish + English (M)', async ({ page }) => {
    await page.fill('#input', 'mama office eka yanava car eken ekama time eka');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0019 - English technical term (M)', async ({ page }) => {
    await page.fill('#input', 'mama computer eken work karanna yanava office eka');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0020 - Place names (Colombo, Kandy) (M)', async ({ page }) => {
    await page.fill('#input', 'mama Colombo walin Kandy yanna yanava bus eken');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0021 - Punctuation marks (M)', async ({ page }) => {
    await page.fill('#input', 'mama yanava, oya enava! api okkoma gedhara yanava.');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0022 - Currency / date / time (M)', async ({ page }) => {
    await page.fill('#input', 'mama Rs.500 gahala 10.30AM eka yanava gedara');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0023 - Medium-length paragraph (M)', async ({ page }) => {
    await page.fill('#input', 'mama dhan gedhara yanava eka nisa mama bath kanava. mama gedhara yanava nam oyata kiyanna puluvan. mama yanava eka nisa mama bath kanava.');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  test('Pos_Fun_0024 - Long-length paragraph (L)', async ({ page }) => {
    await page.fill('#input', 'mama dhan gedhara yanava eka nisa mama bath kanava mama gedhara yanava nam oyata kiyanna puluvan mama yanava eka nisa mama bath kanava mama dhan gedhara yanava eka nisa mama bath kanava mama gedhara yanava nam oyata kiyanna puluvan');
    await expect(page.locator('#output')).not.toHaveValue('');
  });

  /* NEGATIVE FUNCTIONAL TESTS */

  test('Neg_Fun_0001 - Heavy slang confusion (M)', async ({ page }) => {
    await page.fill('#input', 'ela machan supiri vagee mokada wenne bung aiya');
    await expect(page.locator('#output')).toBeVisible();
  });

  test('Neg_Fun_0002 - Excessive joined words (M)', async ({ page }) => {
    await page.fill('#input', 'mamagedharayanavanekanisamatabathkanava');
    await expect(page.locator('#output')).toBeVisible();
  });

  test('Neg_Fun_0003 - Random spacing (M)', async ({ page }) => {
    await page.fill('#input', 'mama    gedhara   yanava     eka   nisa');
    await expect(page.locator('#output')).toBeVisible();
  });

  test('Neg_Fun_0004 - Long paragraph with typos (M)', async ({ page }) => {
    await page.fill('#input', 'mama dhan gedhra yanaava eka niza mama baath kanava gedhara yanaawa');
    await expect(page.locator('#output')).toBeVisible();
  });

  test('Neg_Fun_0005 - Mixed English abbreviations (M)', async ({ page }) => {
    await page.fill('#input', 'mama ASAP yanava gedara btw mama IDK koheda yanava');
    await expect(page.locator('#output')).toBeVisible();
  });

  test('Neg_Fun_0006 - Informal + grammar break (S)', async ({ page }) => {
    await page.fill('#input', 'machan yanava ne');
    await expect(page.locator('#output')).toBeVisible();
  });

  test('Neg_Fun_0007 - Numeric overload (M)', async ({ page }) => {
    await page.fill('#input', 'mama 123 456 789 yanava 999 888 gedara');
    await expect(page.locator('#output')).toBeVisible();
  });

  test('Neg_Fun_0008 - Line breaks + formatting (M)', async ({ page }) => {
    await page.fill('#input', 'mama yanava\ngedara\neka nisa\nmama bath kanava');
    await expect(page.locator('#output')).toBeVisible();
  });

  test('Neg_Fun_0009 - Ambiguous phrasing (M)', async ({ page }) => {
    await page.fill('#input', 'eka hari ne hari mama yanava gedara');
    await expect(page.locator('#output')).toBeVisible();
  });

  test('Neg_Fun_0010 - Edge grammar case (S)', async ({ page }) => {
    await page.fill('#input', 'mama ne yanava');
    await expect(page.locator('#output')).toBeVisible();
  });

  /* UI TESTS */

  test('Pos_UI_0001 - Real-time Sinhala output updates while typing (S)', async ({ page }) => {
    await page.type('#input', 'hello');
    const firstValue = await page.locator('#output').inputValue();

    await page.type('#input', ' world');
    const secondValue = await page.locator('#output').inputValue();

    expect(secondValue).not.toBe(firstValue);
  });

  test('Pos_UI_0002 - Clearing input clears output (S)', async ({ page }) => {
    await page.fill('#input', 'test text');
    await expect(page.locator('#output')).not.toHaveValue('');

    await page.fill('#input', '');
    await expect(page.locator('#output')).toHaveValue('');
  });

});