/*
 * Copyright (c) AXA Group Operations Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const { Container } = require('../../../packages/core/src');
const { SentimentAnalyzer } = require('../../../packages/sentiment/src');
const { LangEn } = require('../../../packages/lang-en/src');
// const { Container } = require('@nlpjs/core');
// const { SentimentAnalyzer } = require('@nlpjs/sentiment');
// const { LangEn } = require('@nlpjs/lang-en');

(async () => {
  const container = new Container();
  container.use(LangEn);
  const sentiment = new SentimentAnalyzer({ container });
  const result = await sentiment.process({ locale: 'en', text: 'I love cats' });
  console.log(result.sentiment);
})();
// output:
// {
//   score: 0.5,
//   numWords: 3,
//   numHits: 1,
//   average: 0.16666666666666666,
//   type: 'senticon',
//   locale: 'en',
//   vote: 'positive'
// }
