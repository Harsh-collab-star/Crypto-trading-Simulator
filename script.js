
const TRANSLATIONS = {
  en: {
    name: "English", flag: "🇬🇧",
    appName: "CryptoSim Pro",
    appSub: "Paper Trading · Real Prices",
    login: "Login", signup: "Sign Up", logout: "Logout",
    username: "Username", password: "Password", fullName: "Full Name",
    createAccount: "Create Account →", loginBtn: "Login →",
    demoAccess: "Quick Demo Access",
    nav: { dashboard:"Dashboard", market:"Market", trade:"Trade", portfolio:"Portfolio",
           history:"History", strategies:"Strategies", backtest:"Backtest",
           leaderboard:"Leaderboard", alerts:"Alerts", news:"News", learn:"Learn", admin:"Admin" },
    cash: "Cash", totalValue: "Total Value", pnl: "P&L", trades: "Trades",
    buy: "BUY", sell: "SELL", execute: "Execute Trade",
    amount: "Amount", quantity: "Quantity", fee: "Fee (0.1%)", total: "Total",
    available: "Available", held: "Held",
    coin: "Coin", price: "Price", change24h: "24h Change", volume: "Volume",
    marketCap: "Market Cap", action: "Action",
    holdings: "Holdings", avgBuy: "Avg Buy", currentPrice: "Current Price",
    currentValue: "Current Value", allocation: "Allocation",
    noHoldings: "No holdings yet. Start trading!",
    history: "Trade History", date: "Date & Time", type: "Type",
    all: "All", export: "Export CSV",
    portfolio: "Portfolio", invested: "Invested",
    leaderboard: "Leaderboard", rank: "Rank", trader: "Trader",
    returnPct: "Return %", winRate: "Win Rate",
    alerts: "Price Alerts", createAlert: "Create Alert",
    condition: "Condition", targetPrice: "Target Price (₹)",
    above: "Price rises above", below: "Price falls below",
    addAlert: "+ Add Alert", noAlerts: "No alerts set.",
    news: "Crypto News",
    learn: "Trading School",
    strategies: "Strategies", backtest: "Backtest",
    strategy: "Strategy", period: "Period", capital: "Starting Capital",
    runBacktest: "▶ Run Backtest",
    results: "Results", finalValue: "Final Value",
    totalReturn: "Total Return", totalTrades: "Total Trades",
    maxDrawdown: "Max Drawdown",
    admin: "Admin Panel", users: "Users", userMgmt: "User Management",
    resetAll: "Reset All Users", bullRun: "Simulate Bull Run", crash: "Simulate Crash",
    activityLog: "Activity Log",
    liveMarket: "Live Market",
    welcomeBack: "Welcome back",
    notifications: "Notifications", clearAll: "Clear all",
    searchCoin: "Search coin...",
    goodMorning: "Good Morning", goodAfternoon: "Good Afternoon", goodEvening: "Good Evening",
    fetchingPrices: "Fetching live prices...",
    paperMoney: "Paper Money", realPrices: "Real Prices",
    selectCoin: "Select Coin",
    placeOrder: "Place Order",
    technicalIndicators: "Technical Indicators",
    portfolioGrowth: "Portfolio Growth",
    holdingsBreakdown: "Holdings Breakdown",
    recentTrades: "Recent Trades",
    topMovers: "Top Movers",
    startCapital: "Starting Capital: ₹1,00,000",
    dayChart: "Price Chart",
    language: "Language",
    loading: "Loading real-time prices...",
    livePrice: "Live Price",
    signal: "Signal",
    noTrades: "No trades yet. Start trading!",
    noHistory: "No trade history found.",
    configureBacktest: "Configure Backtest",
    backtestDesc: "Simulated backtest on historical data. Past performance ≠ future results.",
    traderName: "Rahul (Demo)", traderName2: "Priya (Demo)", adminName: "Admin",
    rankLabel: "Rank", portfolioValue: "Portfolio Value",
    triggered: "TRIGGERED",
    bullish: "📈 Bullish", bearish: "📉 Bearish", neutral: "⚖️ Neutral",
    quizLabel: "Quick Quiz",
    correct: "✅ Correct! Well done!", wrong: "❌ Not quite. Check highlighted answer.",
    back: "← Back", backLessons: "← Back to Lessons",
    disclaimer: "Paper money only — no real funds involved",
    priceAlert: "Price Alert", tradeConfirm: "Trade Confirmed",
    insufficientCash: "Insufficient cash!", insufficientCoin: "Not enough",
    enterAmount: "Enter a valid amount",
    bought: "Bought", sold: "Sold",
    profit: "profit", loss: "loss",
    winRateLabel: "Win rate",
    days30:"30 Days",days90:"90 Days",days180:"180 Days",days365:"1 Year",
    stratMA:"Moving Average Crossover",stratRSI:"RSI Reversal",stratTrend:"Trend Following",stratBH:"Buy & Hold",
  },
  hi: {
    name: "हिंदी", flag: "🇮🇳",
    appName: "क्रिप्टोसिम प्रो",
    appSub: "पेपर ट्रेडिंग · असली कीमतें",
    login: "लॉगिन", signup: "साइन अप", logout: "लॉगआउट",
    username: "यूज़रनेम", password: "पासवर्ड", fullName: "पूरा नाम",
    createAccount: "अकाउंट बनाएं →", loginBtn: "लॉगिन करें →",
    demoAccess: "डेमो एक्सेस",
    nav: { dashboard:"डैशबोर्ड", market:"बाज़ार", trade:"ट्रेड", portfolio:"पोर्टफोलियो",
           history:"इतिहास", strategies:"रणनीतियाँ", backtest:"बैकटेस्ट",
           leaderboard:"लीडरबोर्ड", alerts:"अलर्ट", news:"समाचार", learn:"सीखें", admin:"एडमिन" },
    cash: "नकद", totalValue: "कुल मूल्य", pnl: "लाभ/हानि", trades: "ट्रेड",
    buy: "खरीदें", sell: "बेचें", execute: "ट्रेड करें",
    amount: "राशि", quantity: "मात्रा", fee: "शुल्क (0.1%)", total: "कुल",
    available: "उपलब्ध", held: "होल्ड",
    coin: "कॉइन", price: "कीमत", change24h: "24h बदलाव", volume: "वॉल्यूम",
    marketCap: "मार्केट कैप", action: "कार्रवाई",
    holdings: "होल्डिंग्स", avgBuy: "औसत खरीद", currentPrice: "मौजूदा कीमत",
    currentValue: "मौजूदा मूल्य", allocation: "आवंटन",
    noHoldings: "कोई होल्डिंग नहीं। ट्रेडिंग शुरू करें!",
    history: "ट्रेड इतिहास", date: "दिनांक और समय", type: "प्रकार",
    all: "सभी", export: "CSV डाउनलोड",
    portfolio: "पोर्टफोलियो", invested: "निवेश",
    leaderboard: "लीडरबोर्ड", rank: "रैंक", trader: "ट्रेडर",
    returnPct: "रिटर्न %", winRate: "जीत दर",
    alerts: "मूल्य अलर्ट", createAlert: "अलर्ट बनाएं",
    condition: "शर्त", targetPrice: "लक्ष्य कीमत (₹)",
    above: "कीमत बढ़कर पहुंचे", below: "कीमत घटकर पहुंचे",
    addAlert: "+ अलर्ट जोड़ें", noAlerts: "कोई अलर्ट नहीं।",
    news: "क्रिप्टो समाचार",
    learn: "ट्रेडिंग स्कूल",
    strategies: "रणनीतियाँ", backtest: "बैकटेस्ट",
    strategy: "रणनीति", period: "अवधि", capital: "शुरुआती पूंजी",
    runBacktest: "▶ बैकटेस्ट चलाएं",
    results: "परिणाम", finalValue: "अंतिम मूल्य",
    totalReturn: "कुल रिटर्न", totalTrades: "कुल ट्रेड",
    maxDrawdown: "अधिकतम गिरावट",
    admin: "एडमिन पैनल", users: "उपयोगकर्ता", userMgmt: "उपयोगकर्ता प्रबंधन",
    resetAll: "सभी रीसेट करें", bullRun: "तेजी सिमुलेशन", crash: "गिरावट सिमुलेशन",
    activityLog: "गतिविधि लॉग",
    liveMarket: "लाइव बाज़ार",
    welcomeBack: "स्वागत है",
    notifications: "सूचनाएं", clearAll: "सब हटाएं",
    searchCoin: "कॉइन खोजें...",
    goodMorning: "सुप्रभात", goodAfternoon: "नमस्ते", goodEvening: "शुभ संध्या",
    fetchingPrices: "लाइव कीमतें लोड हो रही हैं...",
    paperMoney: "पेपर मनी", realPrices: "असली कीमतें",
    selectCoin: "कॉइन चुनें",
    placeOrder: "ऑर्डर दें",
    technicalIndicators: "तकनीकी संकेतक",
    portfolioGrowth: "पोर्टफोलियो वृद्धि",
    holdingsBreakdown: "होल्डिंग्स विवरण",
    recentTrades: "हालिया ट्रेड",
    topMovers: "टॉप मूवर्स",
    startCapital: "शुरुआती पूंजी: ₹1,00,000",
    dayChart: "मूल्य चार्ट",
    language: "भाषा",
    loading: "असली कीमतें लोड हो रही हैं...",
    livePrice: "लाइव कीमत",
    signal: "संकेत",
    noTrades: "अभी तक कोई ट्रेड नहीं।",
    noHistory: "कोई ट्रेड इतिहास नहीं मिला।",
    configureBacktest: "बैकटेस्ट सेटअप",
    backtestDesc: "ऐतिहासिक डेटा पर सिमुलेटेड बैकटेस्ट। पिछला प्रदर्शन भविष्य की गारंटी नहीं।",
    traderName:"राहुल (डेमो)",traderName2:"प्रिया (डेमो)",adminName:"एडमिन",
    rankLabel:"रैंक",portfolioValue:"पोर्टफोलियो मूल्य",
    triggered:"ट्रिगर हुआ",
    bullish:"📈 तेजी",bearish:"📉 मंदी",neutral:"⚖️ तटस्थ",
    quizLabel:"त्वरित प्रश्नोत्तरी",
    correct:"✅ सही! शाबाश!",wrong:"❌ गलत। हाइलाइट उत्तर देखें।",
    back:"← वापस",backLessons:"← पाठों पर वापस",
    disclaimer:"केवल पेपर मनी — कोई असली पैसा नहीं",
    priceAlert:"मूल्य अलर्ट",tradeConfirm:"ट्रेड पुष्टि",
    insufficientCash:"पर्याप्त नकद नहीं!",insufficientCoin:"पर्याप्त",
    enterAmount:"सही राशि डालें",
    bought:"खरीदा",sold:"बेचा",
    profit:"लाभ",loss:"हानि",
    winRateLabel:"जीत दर",
    days30:"30 दिन",days90:"90 दिन",days180:"180 दिन",days365:"1 साल",
    stratMA:"मूविंग एवरेज",stratRSI:"RSI रिवर्सल",stratTrend:"ट्रेंड फॉलोइंग",stratBH:"खरीदें और रखें",
  },
  ja: {
    name: "日本語", flag: "🇯🇵",
    appName: "クリプトシム Pro",
    appSub: "模擬取引 · リアル価格",
    login: "ログイン", signup: "サインアップ", logout: "ログアウト",
    username: "ユーザー名", password: "パスワード", fullName: "氏名",
    createAccount: "アカウント作成 →", loginBtn: "ログイン →",
    demoAccess: "デモアクセス",
    nav: { dashboard:"ダッシュボード", market:"マーケット", trade:"取引", portfolio:"ポートフォリオ",
           history:"履歴", strategies:"戦略", backtest:"バックテスト",
           leaderboard:"リーダーボード", alerts:"アラート", news:"ニュース", learn:"学ぶ", admin:"管理" },
    cash: "現金", totalValue: "総額", pnl: "損益", trades: "取引数",
    buy: "買う", sell: "売る", execute: "注文実行",
    amount: "金額", quantity: "数量", fee: "手数料 (0.1%)", total: "合計",
    available: "利用可能", held: "保有",
    coin: "コイン", price: "価格", change24h: "24h変動", volume: "出来高",
    marketCap: "時価総額", action: "操作",
    holdings: "保有資産", avgBuy: "平均取得", currentPrice: "現在価格",
    currentValue: "現在価値", allocation: "配分",
    noHoldings: "保有なし。取引を始めましょう！",
    history: "取引履歴", date: "日時", type: "種類",
    all: "全て", export: "CSV出力",
    portfolio: "ポートフォリオ", invested: "投資額",
    leaderboard: "リーダーボード", rank: "順位", trader: "トレーダー",
    returnPct: "リターン%", winRate: "勝率",
    alerts: "価格アラート", createAlert: "アラート作成",
    condition: "条件", targetPrice: "目標価格 (₹)",
    above: "価格が上昇して", below: "価格が下落して",
    addAlert: "+ アラート追加", noAlerts: "アラートなし。",
    news: "クリプトニュース",
    learn: "トレードスクール",
    strategies: "戦略", backtest: "バックテスト",
    strategy: "戦略", period: "期間", capital: "開始資金",
    runBacktest: "▶ バックテスト実行",
    results: "結果", finalValue: "最終価値",
    totalReturn: "総リターン", totalTrades: "総取引数",
    maxDrawdown: "最大ドローダウン",
    admin: "管理パネル", users: "ユーザー", userMgmt: "ユーザー管理",
    resetAll: "全リセット", bullRun: "強気相場シミュ", crash: "暴落シミュ",
    activityLog: "活動ログ",
    liveMarket: "ライブマーケット",
    welcomeBack: "おかえりなさい",
    notifications: "通知", clearAll: "全消去",
    searchCoin: "コイン検索...",
    goodMorning: "おはようございます", goodAfternoon: "こんにちは", goodEvening: "こんばんは",
    fetchingPrices: "リアル価格読込中...",
    paperMoney: "仮想資金", realPrices: "リアル価格",
    selectCoin: "コイン選択",
    placeOrder: "注文",
    technicalIndicators: "テクニカル指標",
    portfolioGrowth: "ポートフォリオ成長",
    holdingsBreakdown: "保有内訳",
    recentTrades: "最近の取引",
    topMovers: "上昇銘柄",
    startCapital: "開始資金: ₹1,00,000",
    dayChart: "価格チャート",
    language: "言語",
    loading: "リアルタイム価格読込中...",
    livePrice: "ライブ価格",
    signal: "シグナル",
    noTrades: "取引なし。",
    noHistory: "履歴なし。",
    configureBacktest: "バックテスト設定",
    backtestDesc: "過去データによるシミュ。過去成績は将来を保証しません。",
    traderName:"Rahul (デモ)",traderName2:"Priya (デモ)",adminName:"管理者",
    rankLabel:"順位",portfolioValue:"ポートフォリオ価値",
    triggered:"発動済み",
    bullish:"📈 強気",bearish:"📉 弱気",neutral:"⚖️ 中立",
    quizLabel:"クイズ",
    correct:"✅ 正解！",wrong:"❌ 不正解。ハイライトを確認。",
    back:"← 戻る",backLessons:"← レッスンに戻る",
    disclaimer:"仮想資金のみ — 実際の資金は不要",
    priceAlert:"価格アラート",tradeConfirm:"取引確認",
    insufficientCash:"残高不足！",insufficientCoin:"不足",
    enterAmount:"金額を入力",
    bought:"購入",sold:"売却",
    profit:"利益",loss:"損失",
    winRateLabel:"勝率",
    days30:"30日",days90:"90日",days180:"180日",days365:"1年",
    stratMA:"移動平均クロス",stratRSI:"RSIリバーサル",stratTrend:"トレンドフォロー",stratBH:"バイ＆ホールド",
  },
  ru: {
    name: "Русский", flag: "🇷🇺",
    appName: "КриптоСим Про",
    appSub: "Бумажная торговля · Реальные цены",
    login: "Войти", signup: "Регистрация", logout: "Выход",
    username: "Логин", password: "Пароль", fullName: "Полное имя",
    createAccount: "Создать аккаунт →", loginBtn: "Войти →",
    demoAccess: "Быстрый доступ (демо)",
    nav: { dashboard:"Главная", market:"Рынок", trade:"Торговля", portfolio:"Портфель",
           history:"История", strategies:"Стратегии", backtest:"Бэктест",
           leaderboard:"Рейтинг", alerts:"Алерты", news:"Новости", learn:"Обучение", admin:"Админ" },
    cash: "Наличные", totalValue: "Общая стоимость", pnl: "P&L", trades: "Сделки",
    buy: "КУПИТЬ", sell: "ПРОДАТЬ", execute: "Исполнить",
    amount: "Сумма", quantity: "Количество", fee: "Комиссия (0.1%)", total: "Итого",
    available: "Доступно", held: "В портфеле",
    coin: "Монета", price: "Цена", change24h: "Изм. 24ч", volume: "Объём",
    marketCap: "Капитализация", action: "Действие",
    holdings: "Активы", avgBuy: "Средняя покупка", currentPrice: "Текущая цена",
    currentValue: "Текущая стоимость", allocation: "Доля",
    noHoldings: "Нет активов. Начните торговать!",
    history: "История сделок", date: "Дата и время", type: "Тип",
    all: "Все", export: "Экспорт CSV",
    portfolio: "Портфель", invested: "Инвестировано",
    leaderboard: "Рейтинг", rank: "Место", trader: "Трейдер",
    returnPct: "Доходность %", winRate: "Процент побед",
    alerts: "Ценовые алерты", createAlert: "Создать алерт",
    condition: "Условие", targetPrice: "Целевая цена (₹)",
    above: "Цена вырастет до", below: "Цена упадёт до",
    addAlert: "+ Добавить алерт", noAlerts: "Алертов нет.",
    news: "Новости крипто",
    learn: "Школа трейдинга",
    strategies: "Стратегии", backtest: "Бэктест",
    strategy: "Стратегия", period: "Период", capital: "Начальный капитал",
    runBacktest: "▶ Запустить бэктест",
    results: "Результаты", finalValue: "Итоговая стоимость",
    totalReturn: "Общая доходность", totalTrades: "Всего сделок",
    maxDrawdown: "Макс. просадка",
    admin: "Панель админа", users: "Пользователи", userMgmt: "Управление пользователями",
    resetAll: "Сбросить всех", bullRun: "Симул. бычий рынок", crash: "Симул. обвал",
    activityLog: "Журнал активности",
    liveMarket: "Живой рынок",
    welcomeBack: "С возвращением",
    notifications: "Уведомления", clearAll: "Очистить все",
    searchCoin: "Поиск монеты...",
    goodMorning: "Доброе утро", goodAfternoon: "Добрый день", goodEvening: "Добрый вечер",
    fetchingPrices: "Загрузка цен...",
    paperMoney: "Виртуальные деньги", realPrices: "Реальные цены",
    selectCoin: "Выбрать монету",
    placeOrder: "Разместить ордер",
    technicalIndicators: "Технические индикаторы",
    portfolioGrowth: "Рост портфеля",
    holdingsBreakdown: "Структура портфеля",
    recentTrades: "Последние сделки",
    topMovers: "Топ движения",
    startCapital: "Начальный капитал: ₹1,00,000",
    dayChart: "График цены",
    language: "Язык",
    loading: "Загрузка реальных цен...",
    livePrice: "Живая цена",
    signal: "Сигнал",
    noTrades: "Сделок пока нет.",
    noHistory: "История не найдена.",
    configureBacktest: "Настройка бэктеста",
    backtestDesc: "Симулированный бэктест на исторических данных. Прошлое не гарантирует будущее.",
    traderName:"Rahul (Демо)",traderName2:"Priya (Демо)",adminName:"Администратор",
    rankLabel:"Место",portfolioValue:"Стоимость портфеля",
    triggered:"СРАБОТАЛ",
    bullish:"📈 Бычий",bearish:"📉 Медвежий",neutral:"⚖️ Нейтральный",
    quizLabel:"Быстрый тест",
    correct:"✅ Верно! Отлично!",wrong:"❌ Неверно. Смотрите выделенный ответ.",
    back:"← Назад",backLessons:"← К урокам",
    disclaimer:"Только виртуальные деньги — реальные средства не используются",
    priceAlert:"Ценовой алерт",tradeConfirm:"Сделка подтверждена",
    insufficientCash:"Недостаточно средств!",insufficientCoin:"Недостаточно",
    enterAmount:"Введите корректную сумму",
    bought:"Куплено",sold:"Продано",
    profit:"прибыль",loss:"убыток",
    winRateLabel:"Процент побед",
    days30:"30 дней",days90:"90 дней",days180:"180 дней",days365:"1 год",
    stratMA:"Пересечение скользящих",stratRSI:"RSI разворот",stratTrend:"Следование тренду",stratBH:"Купить и держать",
  }
};

// ═══════════════════════════════════════════════════════
//  CryptoSim Pro — Full App Logic
//  Real prices via CoinGecko API (free, no key needed)
//  Paper trading with ₹1,00,000 virtual money
// ═══════════════════════════════════════════════════════

// ─── COIN DEFINITIONS ───────────────────────────────────
const COINS = [
  { id:'BTC', cgId:'bitcoin',   name:'Bitcoin',  color:'#f7931a', emoji:'₿',  fallback:6750000 },
  { id:'ETH', cgId:'ethereum',  name:'Ethereum', color:'#627eea', emoji:'Ξ',  fallback:285000  },
  { id:'SOL', cgId:'solana',    name:'Solana',   color:'#9945ff', emoji:'◎',  fallback:15400   },
  { id:'BNB', cgId:'binancecoin',name:'BNB',     color:'#f0b90b', emoji:'B',  fallback:49000   },
  { id:'XRP', cgId:'ripple',    name:'Ripple',   color:'#346aa9', emoji:'✕',  fallback:52      },
  { id:'DOGE',cgId:'dogecoin',  name:'Dogecoin', color:'#c2a633', emoji:'Ð',  fallback:15      },
];

const INR_RATE = 83.5;
const START_CAPITAL = 100000;
const USERS_KEY = 'csp_users_v2';
const SESSION_KEY = 'csp_session_v2';
const LANG_KEY = 'csp_lang';

// ─── GLOBALS ─────────────────────────────────────────────
let prices = {};
let priceHistory = {};   // { coinId: [{t, p}] }
let charts = {};         // chart.js instances
let activePage = 'dashboard';
let activeCoin = 'BTC';
let orderType = 'buy';
let histFilter = 'all';
let tradePeriod = 60;
let notifications = [];
let activityLog = [];
let lang = localStorage.getItem(LANG_KEY) || 'en';
let apiPricesFetched = false;
let selectedStrat = null;
let ohlcCache = {};
let currentDays = 1;

// ─── TRANSLATIONS ─────────────────────────────────────────
// (TRANSLATIONS injected before this file via i18n.js, but we embed inline as fallback)
function t(key, fallback) {
  const T = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS : {};
  const L = T[lang] || T['en'] || {};
  // Support dot notation like 'nav.dashboard'
  const parts = key.split('.');
  let val = L;
  for (const p of parts) { val = val?.[p]; if(val===undefined) break; }
  return val || fallback || key;
}

function setLang(l, btn) {
  lang = l;
  localStorage.setItem(LANG_KEY, l);
  // Update all lang buttons
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.lang-btn').forEach(b => { if(b.onclick?.toString().includes(`'${l}'`)) b.classList.add('active'); });
  applyTranslations();
}

function applyTranslations() {
  // Update all elements with data-i attribute
  document.querySelectorAll('[data-i]').forEach(el => {
    const key = el.getAttribute('data-i');
    const val = t(key);
    if (val && val !== key) el.textContent = val;
  });
  // Specific UI updates
  const T = (typeof TRANSLATIONS !== 'undefined') ? (TRANSLATIONS[lang] || TRANSLATIONS['en']) : {};
  if (document.getElementById('tab-login')) document.getElementById('tab-login').textContent = T.login || 'Login';
  if (document.getElementById('tab-signup')) document.getElementById('tab-signup').textContent = T.signup || 'Sign Up';
  if (document.getElementById('btn-login')) document.getElementById('btn-login').textContent = T.loginBtn || 'Login →';
  if (document.getElementById('btn-signup')) document.getElementById('btn-signup').textContent = T.createAccount || 'Create Account →';
  if (document.getElementById('demo-label')) document.getElementById('demo-label').textContent = T.demoAccess || 'Quick Demo Access';
  if (document.getElementById('demo1-lbl')) document.getElementById('demo1-lbl').textContent = '👤 ' + (T.traderName || 'Rahul (Demo)');
  if (document.getElementById('demo2-lbl')) document.getElementById('demo2-lbl').textContent = '👤 ' + (T.traderName2 || 'Priya (Demo)');
  if (document.getElementById('demo3-lbl')) document.getElementById('demo3-lbl').textContent = '🔧 ' + (T.adminName || 'Admin');
  if (document.getElementById('btn-logout')) document.getElementById('btn-logout').textContent = T.logout || 'Logout';
  if (document.getElementById('btn-back-learn')) document.getElementById('btn-back-learn').textContent = T.backLessons || '← Back to Lessons';
  if (document.getElementById('btn-runbt')) document.getElementById('btn-runbt').textContent = T.runBacktest || '▶ Run Backtest';
  if (document.getElementById('btn-al')) document.getElementById('btn-al').textContent = T.addAlert || '+ Add Alert';
  if (document.getElementById('notif-title')) document.getElementById('notif-title').textContent = T.notifications || 'Notifications';
  if (document.getElementById('btn-clear-notif')) document.getElementById('btn-clear-notif').textContent = T.clearAll || 'Clear all';
  if (document.getElementById('lbl-user')) document.getElementById('lbl-user').textContent = T.username || 'Username';
  if (document.getElementById('lbl-pass')) document.getElementById('lbl-pass').textContent = T.password || 'Password';
  if (document.getElementById('lbl-user2')) document.getElementById('lbl-user2').textContent = T.username || 'Username';
  if (document.getElementById('lbl-pass2')) document.getElementById('lbl-pass2').textContent = T.password || 'Password';
  if (document.getElementById('lbl-name')) document.getElementById('lbl-name').textContent = T.fullName || 'Full Name';
  if (document.getElementById('tab-buy')) document.getElementById('tab-buy').textContent = T.buy || 'BUY';
  if (document.getElementById('tab-sell')) document.getElementById('tab-sell').textContent = T.sell || 'SELL';
  if (document.getElementById('exec-btn')) {
    const b = document.getElementById('exec-btn');
    b.textContent = (orderType === 'buy' ? (T.buy||'Buy') : (T.sell||'Sell')) + ' ' + activeCoin;
  }
  if (document.getElementById('sb-appsub')) document.getElementById('sb-appsub').textContent = T.appSub || 'Pro Edition';
  if (document.getElementById('price-loading')) document.getElementById('price-loading').textContent = T.loading || 'Loading real-time prices...';
  // Nav items
  const navMap = {dashboard:'dashboard',market:'market',trade:'trade',portfolio:'portfolio',history:'history',strategies:'strategies',backtest:'backtest',leaderboard:'leaderboard',alerts:'alerts',news:'news',learn:'learn',admin:'admin'};
  document.querySelectorAll('.sb-item span[data-i]').forEach(el => {
    const k = el.getAttribute('data-i');
    if(T.nav && T.nav[k.replace('nav.','')] ) el.textContent = T.nav[k.replace('nav.','')] || el.textContent;
  });
  // Re-render pages if active
  if(activePage === 'dashboard') renderDashboard();
  if(activePage === 'market') renderMarket();
  if(activePage === 'portfolio') renderPortfolio();
  if(activePage === 'history') renderHistory();
  if(activePage === 'leaderboard') renderLeaderboard();
  if(activePage === 'news') renderNews();
  if(activePage === 'learn') renderLearn();
  if(activePage === 'strategies') renderStrategies();
  if(activePage === 'alerts') renderAlerts();
  if(activePage === 'admin') renderAdmin();
  updateTradeInfo();
  updateSummary();
}

// ─── STORAGE ──────────────────────────────────────────────
function loadUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  if (raw) return JSON.parse(raw);
  const now = new Date().toISOString();
  const sevenDaysAgo = new Date(Date.now() - 7*86400000).toISOString();
  const defaults = {
    admin: {
      username:'admin', password:'admin123', name:'Admin', role:'admin',
      cash:1000000, holdings:{}, history:[], joinDate:now,
      alerts:[], portfolioHistory:[1000000], notifications:[],
    },
    trader1: {
      username:'trader1', password:'pass123', name:'Rahul Sharma', role:'trader',
      cash:72000, holdings:{ BTC:0.002, ETH:0.15, SOL:1.2 },
      history: makeSeedHistory(['BTC','ETH','SOL'], 12),
      joinDate: sevenDaysAgo, alerts:[],
      portfolioHistory: Array.from({length:40}, (_,i) => 100000 + Math.sin(i/4)*6000 + i*300),
      notifications:[{type:'info', msg:'Welcome to CryptoSim Pro! ₹1,00,000 paper money loaded.', time:now}],
    },
    trader2: {
      username:'trader2', password:'pass123', name:'Priya Mehta', role:'trader',
      cash:91000, holdings:{ ETH:0.08, DOGE:800 },
      history: makeSeedHistory(['ETH','DOGE','XRP'], 8),
      joinDate: new Date(Date.now()-3*86400000).toISOString(), alerts:[],
      portfolioHistory: Array.from({length:40}, (_,i) => 100000 + Math.cos(i/5)*4000 + i*180),
      notifications:[],
    },
  };
  localStorage.setItem(USERS_KEY, JSON.stringify(defaults));
  return defaults;
}

function makeSeedHistory(coinList, count) {
  return Array.from({length: count}, (_, i) => {
    const coin = coinList[i % coinList.length];
    const coinData = COINS.find(c => c.id === coin);
    const price = (coinData?.fallback || 50000) * (0.85 + Math.random() * 0.3);
    const qty = +(Math.random() * 0.5 + 0.01).toFixed(5);
    const total = +(price * qty).toFixed(2);
    return {
      type: i % 2 === 0 ? 'buy' : 'sell',
      coin, qty, price, total,
      fee: +(total * 0.001).toFixed(2),
      pnl: +(Math.random() * 4000 - 1500).toFixed(2),
      time: new Date(Date.now() - (count-i) * 3600000 * 8).toISOString(),
    };
  });
}

function saveUsers(u) { localStorage.setItem(USERS_KEY, JSON.stringify(u)); }
function getSession() { const s = localStorage.getItem(SESSION_KEY); return s ? JSON.parse(s) : null; }
function saveSession(uid) { localStorage.setItem(SESSION_KEY, JSON.stringify({uid})); }
function clearSession() { localStorage.removeItem(SESSION_KEY); }

// ─── PRICE ENGINE ─────────────────────────────────────────
function initPrices() {
  COINS.forEach(c => {
    prices[c.id] = c.fallback;
    const hist = [];
    let p = c.fallback * (0.85 + Math.random()*0.3);
    for (let i = 200; i >= 0; i--) {
      p *= 1 + (Math.random()-0.485)*0.012;
      if(p < c.fallback * 0.3) p = c.fallback * 0.3;
      hist.push({ t: Date.now() - i * 60000, p });
    }
    priceHistory[c.id] = hist;
  });
}

async function fetchRealPrices() {
  const loadEl = document.getElementById('price-loading');
  if(loadEl) loadEl.classList.add('show');
  try {
    const ids = COINS.map(c => c.cgId).join(',');
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=inr&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`;
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    COINS.forEach(c => {
      const d = data[c.cgId];
      if (d && d.inr && d.inr > 0) {
        const newPrice = d.inr;
        // Update current price
        prices[c.id] = newPrice;
        // Push real price into history
        priceHistory[c.id].push({ t: Date.now(), p: newPrice });
        // Store 24h data if available
        c.change24h = d.inr_24h_change || 0;
        c.marketCap = d.inr_market_cap || 0;
        c.volume24h = d.inr_24h_vol || 0;
      }
    });
    apiPricesFetched = true;
    toast(t('livePrice','Live prices loaded') + ' ✓', 'ok');
  } catch(e) {
    console.warn('CoinGecko fetch failed, using simulated prices:', e.message);
    toast('Using simulated prices (API unavailable)', 'wrn');
  }
  if(loadEl) loadEl.classList.remove('show');
  // Render after fetch
  renderTicker();
  if(activePage === 'dashboard') renderDashboard();
  if(activePage === 'market') renderMarket();
  if(activePage === 'trade') updateTradeInfo();
}

function simulateTick() {
  COINS.forEach(c => {
    const drift = (Math.random() - 0.485) * 0.008;
    prices[c.id] = Math.max(prices[c.id] * (1 + drift), c.fallback * 0.2);
    priceHistory[c.id].push({ t: Date.now(), p: prices[c.id] });
    if (priceHistory[c.id].length > 1000) priceHistory[c.id].shift();
  });
  renderTicker();
  checkAlerts();
  if(activePage === 'dashboard') { renderDashboard(); }
  if(activePage === 'market') renderMarket();
  if(activePage === 'trade') { updateTradeInfo(); updateTradeChart(); }
  if(activePage === 'portfolio') renderPortfolio();
}

// ─── FORMAT HELPERS ───────────────────────────────────────
function fmtINR(n) {
  if (n === undefined || n === null || isNaN(n)) return '₹0';
  const abs = Math.abs(n);
  const prefix = n < 0 ? '-' : '';
  if (abs >= 10000000) return prefix + '₹' + (abs/10000000).toFixed(2) + 'Cr';
  if (abs >= 100000)   return prefix + '₹' + (abs/100000).toFixed(2) + 'L';
  if (abs >= 1000)     return prefix + '₹' + (abs/1000).toFixed(1) + 'K';
  return prefix + '₹' + abs.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2});
}
function fmtCoin(n, id) {
  if (!n) return '0 ' + id;
  if (n < 0.00001) return n.toFixed(8) + ' ' + id;
  if (n < 0.001)   return n.toFixed(6) + ' ' + id;
  if (n < 1)       return n.toFixed(4) + ' ' + id;
  return n.toFixed(4) + ' ' + id;
}
function fmtPct(n) { return (n >= 0 ? '+' : '') + (+n).toFixed(2) + '%'; }
function fmtDate(iso) {
  try { return new Date(iso).toLocaleString('en-IN', {dateStyle:'short', timeStyle:'short'}); }
  catch { return iso; }
}
function portValue(user) {
  let v = user.cash || 0;
  Object.entries(user.holdings || {}).forEach(([id, qty]) => { v += (prices[id] || 0) * qty; });
  return v;
}
function avgBuyPrice(user, coinId) {
  const buys = (user.history || []).filter(h => h.coin === coinId && h.type === 'buy');
  if (!buys.length) return prices[coinId] || 0;
  const tq = buys.reduce((s,h) => s + h.qty, 0);
  const ta = buys.reduce((s,h) => s + h.total, 0);
  return tq > 0 ? ta/tq : prices[coinId] || 0;
}

// ─── AUTH ─────────────────────────────────────────────────
function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.auth-tab').forEach(b => { if(b.onclick?.toString().includes(`'${tab}'`)) b.classList.add('active'); });
  document.getElementById('login-form').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('signup-form').style.display = tab === 'signup' ? 'block' : 'none';
  document.getElementById('auth-err').style.display = 'none';
}

function showAuthErr(msg) {
  const el = document.getElementById('auth-err');
  el.textContent = msg; el.style.display = 'block';
}

function doLogin() {
  const users = loadUsers();
  const u = document.getElementById('l-user').value.trim().toLowerCase();
  const p = document.getElementById('l-pass').value;
  if (!u || !p) { showAuthErr(t('enterAmount','Fill all fields')); return; }
  if (!users[u]) { showAuthErr('User not found'); return; }
  if (users[u].password !== p) { showAuthErr('Wrong password'); return; }
  loginUser(u);
}

function doSignup() {
  const users = loadUsers();
  const name = document.getElementById('s-name').value.trim();
  const u = document.getElementById('s-user').value.trim().toLowerCase();
  const p = document.getElementById('s-pass').value;
  if (!name || !u || !p) { showAuthErr('Fill all fields'); return; }
  if (users[u]) { showAuthErr('Username taken'); return; }
  if (p.length < 4) { showAuthErr('Password min 4 chars'); return; }
  users[u] = {
    username:u, password:p, name, role:'trader',
    cash:START_CAPITAL, holdings:{}, history:[],
    joinDate:new Date().toISOString(), alerts:[],
    portfolioHistory:[START_CAPITAL],
    notifications:[{type:'info', msg:'Welcome to CryptoSim Pro! ₹1,00,000 paper money loaded.', time:new Date().toISOString()}],
  };
  saveUsers(users);
  loginUser(u);
}

function loginAs(uid) {
  const users = loadUsers();
  if (users[uid]) loginUser(uid);
}

function loginUser(uid) {
  saveSession(uid);
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('app').classList.add('on');
  initApp();
  const users = loadUsers();
  toast(t('welcomeBack','Welcome back') + ', ' + users[uid].name + '! 👋', 'ok');
}

function doLogout() {
  clearSession();
  Object.values(charts).forEach(ch => { try { ch.destroy(); } catch(e){} });
  charts = {};
  document.getElementById('app').classList.remove('on');
  document.getElementById('auth-screen').style.display = 'flex';
  notifications = [];
}

// ─── APP INIT ─────────────────────────────────────────────
function initApp() {
  const sess = getSession();
  if (!sess) return;
  const users = loadUsers();
  const user = users[sess.uid];
  if (!user) { doLogout(); return; }

  notifications = user.notifications || [];

  // Sidebar user
  const colors = ['#f7931a','#627eea','#9945ff','#f5c842','#05d38b','#f04e6c'];
  const col = colors[sess.uid.charCodeAt(0) % colors.length];
  const av = document.getElementById('sb-av');
  av.style.background = col + '22'; av.style.color = col;
  av.style.border = '1px solid ' + col + '44';
  av.textContent = user.name.charAt(0).toUpperCase();
  document.getElementById('sb-uname').textContent = user.name;
  document.getElementById('sb-role').textContent = user.role;
  document.getElementById('sb-cash').textContent = fmtINR(user.cash);
  if (user.role === 'admin') document.getElementById('admin-nav').style.display = 'flex';
  else document.getElementById('admin-nav').style.display = 'none';

  // Init coin pills
  renderCoinPills();

  // Apply saved language
  lang = localStorage.getItem(LANG_KEY) || 'en';
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.remove('active');
    if(b.onclick?.toString().includes(`'${lang}'`)) b.classList.add('active');
  });
  applyTranslations();

  renderTicker();
  renderDashboard();
  renderStrategies();
  renderNews();
  renderLearn();

  updateNotifBadge();
  fetchRealPrices();
}

// ─── NAVIGATION ───────────────────────────────────────────
function goPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.sb-item').forEach(n => n.classList.remove('active'));
  const pg = document.getElementById('page-' + name);
  if (pg) pg.classList.add('on');
  // activate nav
  document.querySelectorAll('.sb-item').forEach(n => {
    const spans = n.querySelectorAll('span[data-i]');
    spans.forEach(s => { if(s.getAttribute('data-i') === 'nav.' + name) n.classList.add('active'); });
  });
  const titles = { dashboard:t('nav.dashboard','Dashboard'), market:t('liveMarket','Live Market'),
    trade:t('placeOrder','Place Order'), portfolio:t('portfolio','Portfolio'),
    history:t('history','Trade History'), strategies:t('strategies','Strategies'),
    backtest:t('backtest','Backtest'), leaderboard:t('leaderboard','Leaderboard'),
    alerts:t('alerts','Price Alerts'), news:t('news','Crypto News'),
    learn:t('learn','Trading School'), admin:t('admin','Admin Panel') };
  document.getElementById('topbar-title').textContent = titles[name] || name;
  activePage = name;
  document.getElementById('notif-panel').classList.remove('on');
  // Page-specific render
  if (name === 'dashboard') renderDashboard();
  if (name === 'market') renderMarket();
  if (name === 'trade') { updateTradeInfo(); updateTradeChart(); }
  if (name === 'portfolio') renderPortfolio();
  if (name === 'history') renderHistory();
  if (name === 'leaderboard') renderLeaderboard();
  if (name === 'alerts') renderAlerts();
  if (name === 'admin') renderAdmin();
}

// ─── TICKER ───────────────────────────────────────────────
let tickerOffset = 0;
function renderTicker() {
  const belt = document.getElementById('ticker-belt');
  if (!belt) return;
  belt.innerHTML = COINS.map(c => {
    const hist = priceHistory[c.id];
    const prev = hist[Math.max(0, hist.length - 20)]?.p || prices[c.id];
    const chg = ((prices[c.id] - prev) / prev) * 100;
    const cls = chg >= 0 ? 'up' : 'dn';
    return `<span class="t-item" onclick="quickTradeNav('${c.id}')">
      <span class="t-sym" style="color:${c.color}">${c.id}</span>
      <span>${fmtINR(prices[c.id])}</span>
      <span class="${cls}">${fmtPct(chg)}</span>
    </span>`;
  }).join('');
}
function quickTradeNav(coinId) { activeCoin = coinId; goPage('trade'); }

// ─── DASHBOARD ────────────────────────────────────────────
function renderDashboard() {
  const sess = getSession(); if (!sess) return;
  const users = loadUsers();
  const user = users[sess.uid];
  const total = portValue(user);
  const pnl = total - START_CAPITAL;
  const pnlPct = (pnl / START_CAPITAL) * 100;
  const wins = (user.history||[]).filter(h => h.pnl > 0).length;
  const winRate = user.history?.length ? ((wins/user.history.length)*100).toFixed(0)+'%' : '—';

  document.getElementById('sb-cash').textContent = fmtINR(user.cash);

  const el = document.getElementById('dash-stats');
  el.innerHTML = [
    { lbl: t('totalValue','Total Value'), val: fmtINR(total), col:'var(--gold)', sub: `<span class="${pnl>=0?'up':'dn'}">${fmtINR(pnl)}</span>` },
    { lbl: t('cash','Cash'), val: fmtINR(user.cash), col:'var(--text)', sub:'Ready to invest' },
    { lbl: t('pnl','P&L'), val: fmtINR(pnl), col: pnl>=0?'var(--green)':'var(--red)', sub:`<span class="${pnlPct>=0?'up':'dn'}">${fmtPct(pnlPct)}</span>` },
    { lbl: t('trades','Trades'), val: user.history?.length||0, col:'var(--text)', sub:`${t('winRateLabel','Win rate')}: ${winRate}` },
  ].map(s => `<div class="sc"><div class="sc-lbl">${s.lbl}</div><div class="sc-val" style="color:${s.col}">${s.val}</div><div class="sc-sub">${s.sub}</div></div>`).join('');

  // Update portfolio history
  user.portfolioHistory = user.portfolioHistory || [START_CAPITAL];
  const lastVal = user.portfolioHistory[user.portfolioHistory.length - 1];
  if (Math.abs(total - lastVal) > 1) {
    user.portfolioHistory.push(total);
    if (user.portfolioHistory.length > 300) user.portfolioHistory.shift();
    users[sess.uid] = user; saveUsers(users);
  }

  renderPortfolioChart(user.portfolioHistory);
  renderPieChart(user);
  renderRecentTrades(user);
  renderTopMovers();
}

function renderPortfolioChart(hist) {
  const canvas = document.getElementById('ch-portfolio');
  if (!canvas) return;
  const isUp = hist[hist.length-1] >= hist[0];
  const color = isUp ? '#05d38b' : '#f04e6c';
  const bgColor = isUp ? 'rgba(5,211,139,0.06)' : 'rgba(240,78,108,0.06)';
  
  if (charts['portfolio']) {
    charts['portfolio'].data.labels = hist.map((_,i)=>i);
    charts['portfolio'].data.datasets[0].data = hist;
    charts['portfolio'].data.datasets[0].borderColor = color;
    charts['portfolio'].data.datasets[0].backgroundColor = bgColor;
    charts['portfolio'].update('none');
    return;
  }
  
  charts['portfolio'] = new Chart(canvas, {
    type:'line',
    data:{ labels: hist.map((_,i)=>i), datasets:[{
      data: hist, fill:'start',
      borderColor: color,
      backgroundColor: bgColor,
      borderWidth:2, pointRadius:0, tension:0.4
    }]},
    options:{ responsive:true, plugins:{legend:{display:false}},
      scales:{ x:{display:false}, y:{ ticks:{color:'#4e6080', callback:v=>fmtINR(v)}, grid:{color:'rgba(255,255,255,0.04)'} } },
      animation:{duration:300} }
  });
}

function renderPieChart(user) {
  const canvas = document.getElementById('ch-pie');
  if (!canvas) return;
  const entries = Object.entries(user.holdings||{}).filter(([,q])=>q>0.000001);
  if (!entries.length) {
    if (charts['pie']) { charts['pie'].destroy(); delete charts['pie']; }
    canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height); return;
  }
  const data = [['Cash', user.cash, '#4e6080'], ...entries.map(([id,q]) => [id, prices[id]*q, COINS.find(c=>c.id===id)?.color||'#fff'])];
  
  if (charts['pie']) {
    charts['pie'].data.labels = data.map(d=>d[0]);
    charts['pie'].data.datasets[0].data = data.map(d=>d[1]);
    charts['pie'].data.datasets[0].backgroundColor = data.map(d=>d[2]);
    charts['pie'].update('none');
    return;
  }
  
  charts['pie'] = new Chart(canvas, {
    type:'doughnut',
    data:{ labels:data.map(d=>d[0]), datasets:[{ data:data.map(d=>d[1]), backgroundColor:data.map(d=>d[2]), borderColor:'#0c1220', borderWidth:2 }]},
    options:{ responsive:true, plugins:{legend:{position:'right', labels:{color:'#7a90a8', font:{size:11}}}}, animation:{duration:300} }
  });
}

function renderRecentTrades(user) {
  const el = document.getElementById('dash-recent');
  const trades = (user.history||[]).slice(0,5);
  if (!trades.length) { el.innerHTML = `<div class="empty"><div class="empty-i">📋</div><p>${t('noTrades','No trades yet')}</p></div>`; return; }
  el.innerHTML = trades.map(h => `<div class="between" style="padding:8px 0;border-bottom:1px solid var(--border);font-size:11px">
    <div class="row"><span class="badge badge-${h.type==='buy'?'b':'s'}">${h.type.toUpperCase()}</span><span style="font-family:var(--mono);font-weight:700">${h.coin}</span></div>
    <div style="text-align:right"><div style="font-family:var(--mono)">${fmtINR(h.total)}</div><div style="color:var(--muted);font-size:9px">${fmtDate(h.time)}</div></div>
  </div>`).join('');
}

function renderTopMovers() {
  const el = document.getElementById('dash-movers');
  const movers = COINS.map(c => {
    const hist = priceHistory[c.id];
    const prev = hist[Math.max(0,hist.length-30)]?.p || prices[c.id];
    const chg = ((prices[c.id]-prev)/prev)*100;
    return {...c, chg};
  }).sort((a,b) => Math.abs(b.chg)-Math.abs(a.chg));
  el.innerHTML = movers.map(c => `<div class="between" style="padding:9px 0;border-bottom:1px solid var(--border)">
    <div class="row">
      <div style="width:26px;height:26px;border-radius:50%;background:${c.color}22;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:${c.color}">${c.emoji}</div>
      <span style="font-weight:700;font-size:12px">${c.id}</span>
    </div>
    <div style="text-align:right">
      <div style="font-family:var(--mono);font-size:11px">${fmtINR(prices[c.id])}</div>
      <div class="${c.chg>=0?'up':'dn'}" style="font-size:10px">${fmtPct(c.chg)}</div>
    </div>
  </div>`).join('');
}

// ─── MARKET ───────────────────────────────────────────────
function renderMarket() {
  const tbody = document.getElementById('mkt-tbody');
  if (!tbody) return;
  tbody.innerHTML = COINS.map((c,i) => {
    const hist = priceHistory[c.id];
    const prev24 = hist[Math.max(0,hist.length-24*6)]?.p || prices[c.id];
    const chg24 = c.change24h !== undefined ? c.change24h : ((prices[c.id]-prev24)/prev24*100);
    const mcap = c.marketCap || prices[c.id] * [19700000,120000000,430000000,150000000,50000000000,140000000000][i];
    const vol = c.volume24h || prices[c.id] * (Math.random()*80000+30000);
    const sparkId = 'sp-'+c.id;
    return `<tr onclick="quickTradeNav('${c.id}')">
      <td style="color:var(--muted);font-weight:700;font-family:var(--mono)">${i+1}</td>
      <td><div class="coin-cell"><div class="coin-ic" style="background:${c.color}22;color:${c.color}">${c.emoji}</div><div><div class="coin-nm">${c.name}</div><div class="coin-tk">${c.id}</div></div></div></td>
      <td class="price-cell">${fmtINR(prices[c.id])}</td>
      <td class="${chg24>=0?'up':'dn'}" style="font-weight:700;font-family:var(--mono)">${fmtPct(chg24)}</td>
      <td style="font-family:var(--mono);font-size:11px">${fmtINR(mcap)}</td>
      <td style="font-family:var(--mono);font-size:11px">${fmtINR(vol)}</td>
      <td class="spark-cell"><canvas id="${sparkId}" width="80" height="36"></canvas></td>
      <td>
        <button class="qbtn b" onclick="event.stopPropagation();quickTrade('${c.id}','buy')">Buy</button>
        <button class="qbtn s" onclick="event.stopPropagation();quickTrade('${c.id}','sell')" style="margin-left:4px">Sell</button>
      </td>
    </tr>`;
  }).join('');

  // Draw sparklines
  COINS.forEach(c => {
    setTimeout(() => {
      const cv = document.getElementById('sp-'+c.id);
      if (!cv) return;
      const data = priceHistory[c.id].slice(-20).map(h=>h.p);
      const first=data[0], last=data[data.length-1];
      if (charts['sp-'+c.id]) {
        charts['sp-'+c.id].data.datasets[0].data = data;
        charts['sp-'+c.id].data.datasets[0].borderColor = last>=first?'#05d38b':'#f04e6c';
        charts['sp-'+c.id].update('none');
      } else {
        charts['sp-'+c.id] = new Chart(cv, {
          type:'line',
          data:{ labels:data.map((_,i)=>i), datasets:[{data, borderColor:last>=first?'#05d38b':'#f04e6c', borderWidth:1.5, pointRadius:0, fill:false, tension:0.4}]},
          options:{ responsive:false, plugins:{legend:{display:false}}, scales:{x:{display:false},y:{display:false}}, animation:{duration:0} }
        });
      }
    }, 50);
  });
}

function quickTrade(coinId, type) {
  activeCoin = coinId; orderType = type;
  goPage('trade');
}

// ─── TRADE PAGE ───────────────────────────────────────────
function renderCoinPills() {
  const el = document.getElementById('coin-pills');
  if (!el) return;
  el.innerHTML = COINS.map(c =>
    `<div class="cpill ${c.id===activeCoin?'active':''}" onclick="selectCoin('${c.id}')">${c.emoji} ${c.id}</div>`
  ).join('');
}

function selectCoin(id) {
  activeCoin = id;
  renderCoinPills();
  updateTradeInfo();
  updateTradeChart();
  updateSummary();
}

function setOrderType(type) {
  orderType = type;
  document.querySelector('.o-tab.b')?.classList.toggle('active', type==='buy');
  document.querySelector('.o-tab.s')?.classList.toggle('active', type==='sell');
  const btn = document.getElementById('exec-btn');
  if (btn) {
    btn.className = 'exec-btn ' + (type==='buy'?'b':'s');
    btn.textContent = (type==='buy'?t('buy','Buy'):t('sell','Sell')) + ' ' + activeCoin;
  }
  updateAvailLabel();
  updateSummary();
}

function updateAvailLabel() {
  const sess = getSession(); if (!sess) return;
  const users = loadUsers(); const user = users[sess.uid];
  const el = document.getElementById('avail-lbl');
  if (!el) return;
  if (orderType === 'buy') {
    el.textContent = t('available','Available') + ': ' + fmtINR(user.cash);
  } else {
    const held = user.holdings?.[activeCoin] || 0;
    el.textContent = t('held','Held') + ': ' + fmtCoin(held, activeCoin) + ' (' + fmtINR(held * prices[activeCoin]) + ')';
  }
}

function updateTradeInfo() {
  const c = COINS.find(x => x.id === activeCoin);
  if (!c) return;
  const hist = priceHistory[activeCoin];
  const prev = hist[Math.max(0,hist.length-24*6)]?.p || prices[activeCoin];
  const chg = ((prices[activeCoin]-prev)/prev)*100;
  const nameEl = document.getElementById('tc-name'); if(nameEl) nameEl.textContent = c.name+' ('+c.id+')';
  const priceEl = document.getElementById('tc-price'); if(priceEl) priceEl.textContent = fmtINR(prices[activeCoin]);
  const chgEl = document.getElementById('tc-chg');
  if(chgEl) { chgEl.textContent = fmtPct(chg) + ' (24h)'; chgEl.className = 'chart-chg ' + (chg>=0?'up':'dn'); }
  updateIndicators();
  updateAvailLabel();
  const btn = document.getElementById('exec-btn');
  if(btn) { btn.className = 'exec-btn '+(orderType==='buy'?'b':'s'); btn.textContent = (orderType==='buy'?t('buy','Buy'):t('sell','Sell'))+' '+activeCoin; }
  renderCoinPills();
}

function setPeriod(label, btn) {
  if (label === '1D') currentDays = 1;
  else if (label === '1W') currentDays = 7;
  else if (label === '1M') currentDays = 30;
  else if (label === '1Y') currentDays = 365;
  
  document.querySelectorAll('.pbtn').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  updateTradeChart(true);
}

async function fetchCoinGeckoOHLC(coinId, days) {
  const c = COINS.find(x => x.id === coinId);
  if (!c) return null;
  
  const cacheKey = `${coinId}_${days}`;
  const now = Date.now();
  if (ohlcCache[cacheKey] && (now - ohlcCache[cacheKey].timestamp < 60000)) {
    return JSON.parse(JSON.stringify(ohlcCache[cacheKey].data));
  }
  
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${c.cgId}/ohlc?vs_currency=inr&days=${days}`, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) throw new Error('OHLC fetch failed');
    const rawData = await res.json();
    
    const formattedData = rawData.map(d => ({
      time: Math.floor(d[0] / 1000),
      open: d[1],
      high: d[2],
      low: d[3],
      close: d[4]
    }));
    
    ohlcCache[cacheKey] = { timestamp: now, data: formattedData };
    return JSON.parse(JSON.stringify(formattedData));
  } catch(e) {
    console.warn('CoinGecko OHLC failed, using fallback:', e.message);
    return null;
  }
}

async function updateTradeChart(forceFetch = false) {
  const canvas = document.getElementById('ch-trade');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const c = COINS.find(x => x.id === activeCoin);
  
  let points = [];
  if (currentDays > 0) {
    const ohlc = await fetchCoinGeckoOHLC(activeCoin, currentDays);
    if (ohlc && ohlc.length > 0) {
      points = ohlc.map(d => ({ x: new Date(d.time * 1000), y: d.close }));
      if (prices[activeCoin]) {
        points.push({ x: new Date(), y: prices[activeCoin] });
      }
    }
  }

  if (points.length === 0) {
    const hist = priceHistory[activeCoin] || [];
    const slicePts = Math.min(1000, hist.length);
    points = hist.slice(-slicePts).map(pt => ({ x: new Date(pt.t), y: pt.p }));
    if (points.length === 0 && prices[activeCoin]) {
      points = [{ x: new Date(), y: prices[activeCoin] }];
    }
  }

  const labels = points.map(pt => {
    const date = pt.x;
    if (currentDays <= 1) return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  });

  const directionUp = points.length > 1 && points[points.length - 1].y >= points[0].y;
  const color = directionUp ? '#05d38b' : '#f04e6c';
  const values = points.map(pt => pt.y);
  const yMin = Math.min(...values);
  const yMax = Math.max(...values);
  const yRange = Math.max(yMax - yMin, Math.abs(yMin) * 0.03, 1);
  const padding = yRange * 0.15;

  if (charts['trade']) {
    charts['trade'].data.labels = labels;
    charts['trade'].data.datasets[0].data = values;
    charts['trade'].data.datasets[0].borderColor = color;
    charts['trade'].options.scales.y.min = yMin - padding;
    charts['trade'].options.scales.y.max = yMax + padding;
    charts['trade'].update('none');
  } else {
    charts['trade'] = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: `${c?.name || activeCoin} Price`,
          data: values,
          borderColor: color,
          backgroundColor: 'rgba(5,211,139,0.12)',
          borderWidth: 2,
          pointRadius: 0,
          tension: 0.35,
          fill: 'start',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: ctx => fmtINR(ctx.parsed.y) } }
        },
        scales: {
          x: { ticks: { color: '#4e6080' }, grid: { color: 'rgba(255,255,255,0.04)' } },
          y: {
            min: yMin - padding,
            max: yMax + padding,
            ticks: { color: '#4e6080', callback: v => fmtINR(v) },
            grid: { color: 'rgba(255,255,255,0.04)' }
          }
        },
        interaction: { intersect: false, mode: 'index' },
        animation: { duration: 200 }
      }
    });
  }

  renderTradeMiniChart();
  updateIndicators();
  if (activePage === 'trade' && document.getElementById('trade-options-view')?.style.display !== 'none') {
    renderOptionChain();
  }
}

function renderTradeMiniChart() {
  const canvas = document.getElementById('ch-mini');
  if (!canvas) return;
  const hist = priceHistory[activeCoin] || [];
  const points = hist.slice(-24).map(pt => ({ x: new Date(pt.t), y: pt.p }));
  
  if (points.length === 0) {
    if (charts['tradeMini']) { charts['tradeMini'].destroy(); delete charts['tradeMini']; }
    charts['tradeMini'] = new Chart(canvas, {
      type: 'line', data: { labels: ['No data'], datasets: [{ data: [0], borderColor: '#05d38b', backgroundColor: 'rgba(5,211,139,.1)', borderWidth: 2, pointRadius: 0, fill: 'start' }] },
      options: { plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } }, responsive: true, maintainAspectRatio: false }
    });
    return;
  }

  const labels = points.map(pt => pt.x.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const values = points.map(pt => pt.y);

  const yMin = Math.min(...values);
  const yMax = Math.max(...values);
  const yRange = Math.max(yMax - yMin, Math.abs(yMin) * 0.03, 1);
  const padding = yRange * 0.15;

  if (charts['tradeMini']) {
    charts['tradeMini'].data.labels = labels;
    charts['tradeMini'].data.datasets[0].data = values;
    charts['tradeMini'].options.scales.y.min = yMin - padding;
    charts['tradeMini'].options.scales.y.max = yMax + padding;
    charts['tradeMini'].update('none');
    return;
  }

  charts['tradeMini'] = new Chart(canvas, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        data: values,
        borderColor: '#05d38b',
        backgroundColor: 'rgba(5,211,139,.12)',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.35,
        fill: 'start',
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { 
          min: yMin - padding,
          max: yMax + padding,
          ticks: { color: '#4e6080', callback: v => fmtINR(v) }, 
          grid: { color: 'rgba(255,255,255,0.04)' } 
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 250 }
    }
  });
}

function switchTradeTab(tab) {
  document.getElementById('ttab-spot').classList.toggle('active', tab === 'spot');
  document.getElementById('ttab-options').classList.toggle('active', tab === 'options');
  
  document.getElementById('trade-spot-view').style.display = tab === 'spot' ? 'block' : 'none';
  document.getElementById('trade-options-view').style.display = tab === 'options' ? 'block' : 'none';

  if (tab === 'options') {
    renderOptionChain();
  }
}

function renderOptionChain() {
  const tbody = document.getElementById('oc-tbody');
  const priceEl = document.getElementById('oc-price');
  const nameEl = document.getElementById('oc-name');
  if (!tbody) return;
  
  const c = COINS.find(x => x.id === activeCoin);
  const currentPrice = prices[activeCoin] || 0;
  
  if (nameEl) nameEl.textContent = `${c.name} (${c.id}) Options`;
  if (priceEl) priceEl.textContent = fmtINR(currentPrice);

  // Generate simulated strikes around the current price
  const strikeStep = currentPrice > 1000000 ? 50000 : currentPrice > 100000 ? 5000 : currentPrice > 10000 ? 500 : currentPrice > 1000 ? 50 : currentPrice > 10 ? 1 : 0.01;
  const centerStrike = Math.round(currentPrice / strikeStep) * strikeStep;
  
  const strikes = [];
  for (let i = -5; i <= 5; i++) {
    strikes.push(centerStrike + i * strikeStep);
  }
  
  tbody.innerHTML = strikes.map(strike => {
    // Simulated option pricing logic
    const distance = Math.abs(currentPrice - strike) / currentPrice;
    const intrinsicCall = Math.max(0, currentPrice - strike);
    const intrinsicPut = Math.max(0, strike - currentPrice);
    
    // Time value simulated by a simple bell curve around the money
    const timeValue = currentPrice * 0.02 * Math.exp(-distance * 20);
    
    const callPrice = intrinsicCall + timeValue;
    const putPrice = intrinsicPut + timeValue;
    
    const callBid = callPrice * 0.98;
    const callAsk = callPrice * 1.02;
    const putBid = putPrice * 0.98;
    const putAsk = putPrice * 1.02;
    
    const callVol = Math.floor(Math.random() * 5000 * Math.exp(-distance * 10));
    const putVol = Math.floor(Math.random() * 5000 * Math.exp(-distance * 10));

    const isCallITM = currentPrice > strike;
    const isPutITM = currentPrice < strike;
    
    return `<tr>
      <td class="${isCallITM ? 'oc-itm-call' : ''}">${fmtINR(callVol)}</td>
      <td class="${isCallITM ? 'oc-itm-call' : ''}" style="color:var(--green)">${fmtINR(callBid)}</td>
      <td class="${isCallITM ? 'oc-itm-call' : ''}" style="color:var(--green)">${fmtINR(callAsk)}</td>
      <td class="oc-strike">${fmtINR(strike)}</td>
      <td class="${isPutITM ? 'oc-itm-put' : ''}" style="color:var(--red)">${fmtINR(putBid)}</td>
      <td class="${isPutITM ? 'oc-itm-put' : ''}" style="color:var(--red)">${fmtINR(putAsk)}</td>
      <td class="${isPutITM ? 'oc-itm-put' : ''}">${fmtINR(putVol)}</td>
    </tr>`;
  }).join('');
}

function updateIndicators() {
  const hist = priceHistory[activeCoin].map(h=>h.p);
  const price = prices[activeCoin];
  const ma20 = hist.slice(-20).reduce((a,b)=>a+b,0)/Math.min(20,hist.length);
  const ma50 = hist.slice(-50).reduce((a,b)=>a+b,0)/Math.min(50,hist.length);
  const rsiVal = calcRSI(hist.slice(-15));
  const grid = document.getElementById('ind-grid');
  if (!grid) return;
  const inds = [
    { lbl:'MA20', val:fmtINR(ma20), sig:price>ma20?'BUY':'SELL', up:price>ma20 },
    { lbl:'MA50', val:fmtINR(ma50), sig:ma20>ma50?'BUY':'SELL', up:ma20>ma50 },
    { lbl:'RSI(14)', val:rsiVal.toFixed(1), sig:rsiVal<30?'OVERSOLD':rsiVal>70?'OVERBOUGHT':'NEUTRAL', up:rsiVal<45 },
  ];
  grid.innerHTML = inds.map(ind => `<div class="ind-card">
    <div class="ind-lbl">${ind.lbl}</div>
    <div class="ind-val">${ind.val}</div>
    <span class="ind-sig ${ind.up?'sig-buy':'sig-sell'}">${t('signal','Signal')}: ${ind.sig}</span>
  </div>`).join('');
}

function calcRSI(prices) {
  if (prices.length < 2) return 50;
  let gains=0, losses=0;
  for (let i=1;i<prices.length;i++) {
    const d = prices[i]-prices[i-1];
    if(d>0) gains+=d; else losses+=Math.abs(d);
  }
  const n = prices.length-1;
  if(losses===0) return 100;
  const rs = (gains/n)/(losses/n);
  return 100-(100/(1+rs));
}

function setPct(pct) {
  const sess = getSession(); if (!sess) return;
  const users = loadUsers(); const user = users[sess.uid];
  let maxINR;
  if (orderType === 'buy') maxINR = user.cash * pct / 100;
  else { const held = user.holdings?.[activeCoin]||0; maxINR = held * prices[activeCoin] * pct/100; }
  document.getElementById('order-amt').value = maxINR.toFixed(2);
  updateSummary();
}

function updateSummary() {
  const amt = parseFloat(document.getElementById('order-amt')?.value) || 0;
  const price = prices[activeCoin];
  const fee = amt * 0.001;
  const qty = amt > 0 ? (amt-fee)/price : 0;
  const set = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
  set('os-coin', activeCoin);
  set('os-price', fmtINR(price));
  set('os-qty', amt > 0 ? fmtCoin(qty, activeCoin) : '—');
  set('os-fee', amt > 0 ? fmtINR(fee) : '—');
  set('os-total', amt > 0 ? fmtINR(amt) : '—');
}

function executeTrade() {
  const sess = getSession(); if (!sess) return;
  const users = loadUsers();
  const amt = parseFloat(document.getElementById('order-amt').value);
  if (!amt || amt <= 0) { toast(t('enterAmount','Enter a valid amount'), 'err'); return; }
  const price = prices[activeCoin];
  const fee = amt * 0.001;
  let user = users[sess.uid];
  let pnlVal = 0;

  if (orderType === 'buy') {
    if (amt > user.cash) { toast(t('insufficientCash','Insufficient cash!'), 'err'); return; }
    user.cash -= amt;
    const qty = (amt-fee)/price;
    user.holdings = user.holdings || {};
    user.holdings[activeCoin] = (user.holdings[activeCoin]||0) + qty;
    user.history.unshift({ type:'buy', coin:activeCoin, qty, price, total:amt, fee, pnl:0, time:new Date().toISOString() });
    const msg = `${t('bought','Bought')} ${fmtCoin(qty,activeCoin)} ✓`;
    toast(msg, 'ok');
    addNotif('trade', msg);
  } else {
    const held = user.holdings?.[activeCoin] || 0;
    const qtyNeeded = amt / price;
    if (qtyNeeded > held) { toast(t('insufficientCoin','Not enough') + ' ' + activeCoin + '!', 'err'); return; }
    const ab = avgBuyPrice(user, activeCoin);
    pnlVal = (price - ab) * qtyNeeded;
    user.holdings[activeCoin] -= qtyNeeded;
    const received = amt - fee;
    user.cash += received;
    user.history.unshift({ type:'sell', coin:activeCoin, qty:qtyNeeded, price, total:received, fee, pnl:pnlVal, time:new Date().toISOString() });
    const pnlStr = pnlVal >= 0 ? `+${fmtINR(pnlVal)} ${t('profit','profit')}` : `${fmtINR(pnlVal)} ${t('loss','loss')}`;
    const msg = `${t('sold','Sold')} ${fmtCoin(qtyNeeded,activeCoin)} — ${pnlStr}`;
    toast(msg, 'ok');
    addNotif('trade', msg);
    if (pnlVal > 2000) toast('🎉 Great trade! ' + fmtINR(pnlVal) + ' ' + t('profit','profit') + '!', 'inf');
  }

  user.notifications = notifications;
  users[sess.uid] = user;
  saveUsers(users);
  document.getElementById('order-amt').value = '';
  document.getElementById('sb-cash').textContent = fmtINR(user.cash);
  updateSummary();
  updateAvailLabel();
  addActivityLog(`${user.name} ${orderType} ${activeCoin} — ${fmtINR(amt)}`);
}

// ─── PORTFOLIO ────────────────────────────────────────────
function renderPortfolio() {
  const sess = getSession(); if (!sess) return;
  const users = loadUsers(); const user = users[sess.uid];
  let invested = 0;
  const holdings = Object.entries(user.holdings||{}).filter(([,q])=>q>0.000001);
  const total = portValue(user);
  holdings.forEach(([id,q]) => { invested += prices[id]*q; });
  const pnl = total - START_CAPITAL;

  const st = document.getElementById('port-stats');
  st.innerHTML = [
    {lbl:t('totalValue','Total Value'), val:fmtINR(total), col:'var(--gold)'},
    {lbl:t('invested','Invested'), val:fmtINR(invested), col:'var(--text)'},
    {lbl:t('cash','Cash'), val:fmtINR(user.cash), col:'var(--text)'},
    {lbl:t('pnl','P&L'), val:fmtINR(pnl), col:pnl>=0?'var(--green)':'var(--red)'},
  ].map(s=>`<div class="sc"><div class="sc-lbl">${s.lbl}</div><div class="sc-val" style="color:${s.col}">${s.val}</div></div>`).join('');

  const tbody = document.getElementById('port-tbody');
  if (!holdings.length) {
    tbody.innerHTML = `<tr><td colspan="7"><div class="empty"><div class="empty-i">💼</div><p>${t('noHoldings','No holdings yet. Start trading!')}</p></div></td></tr>`;
  } else {
    tbody.innerHTML = holdings.map(([id,qty]) => {
      const c = COINS.find(x=>x.id===id);
      const price = prices[id];
      const val = qty * price;
      const ab = avgBuyPrice(user, id);
      const costBasis = ab * qty;
      const holPnl = val - costBasis;
      const holPnlPct = costBasis > 0 ? (holPnl/costBasis*100) : 0;
      const alloc = total > 0 ? (val/total*100) : 0;
      return `<tr>
        <td><div class="coin-cell"><div class="coin-ic" style="background:${c?.color}22;color:${c?.color}">${c?.emoji||'?'}</div><div><div class="coin-nm">${c?.name||id}</div><div class="coin-tk">${id}</div></div></div></td>
        <td style="font-family:var(--mono)">${fmtCoin(qty,id)}</td>
        <td style="font-family:var(--mono)">${fmtINR(ab)}</td>
        <td style="font-family:var(--mono)">${fmtINR(price)}</td>
        <td style="font-family:var(--mono);font-weight:700">${fmtINR(val)}</td>
        <td class="${holPnl>=0?'up':'dn'}" style="font-family:var(--mono);font-weight:700">${fmtINR(holPnl)}<br><span style="font-size:10px">${fmtPct(holPnlPct)}</span></td>
        <td><div class="pbar-wrap"><div style="font-size:10px;color:var(--muted2)">${alloc.toFixed(1)}%</div><div class="pbar"><div class="pbar-fill ${holPnl>=0?'g':'r'}" style="width:${Math.min(alloc,100)}%"></div></div></div></td>
      </tr>`;
    }).join('');
  }

  // PnL chart
  const canvas = document.getElementById('ch-pnl');
  if (canvas && user.portfolioHistory) {
    const pnlData = user.portfolioHistory.map(v => v - START_CAPITAL);
    if (charts['pnl']) {
      charts['pnl'].data.labels = pnlData.map((_,i)=>i);
      charts['pnl'].data.datasets[0].data = pnlData;
      charts['pnl'].data.datasets[0].backgroundColor = pnlData.map(v=>v>=0?'rgba(5,211,139,0.45)':'rgba(240,78,108,0.45)');
      charts['pnl'].data.datasets[0].borderColor = pnlData.map(v=>v>=0?'#05d38b':'#f04e6c');
      charts['pnl'].update('none');
    } else {
      charts['pnl'] = new Chart(canvas, {
        type:'bar',
        data:{ labels:pnlData.map((_,i)=>i), datasets:[{ data:pnlData, backgroundColor:pnlData.map(v=>v>=0?'rgba(5,211,139,0.45)':'rgba(240,78,108,0.45)'), borderColor:pnlData.map(v=>v>=0?'#05d38b':'#f04e6c'), borderWidth:1 }]},
        options:{ responsive:true, plugins:{legend:{display:false}}, scales:{ x:{display:false}, y:{ ticks:{color:'#4e6080', callback:v=>fmtINR(v)}, grid:{color:'rgba(255,255,255,0.04)'} } }, animation:{duration:300} }
      });
    }
  }
}

// ─── HISTORY ─────────────────────────────────────────────
function renderHistory() {
  const sess = getSession(); if (!sess) return;
  const users = loadUsers(); const user = users[sess.uid];
  const search = document.getElementById('hist-search')?.value?.toLowerCase() || '';
  let data = (user.history||[]).filter(h => {
    if (histFilter === 'all') return true;
    if (histFilter === 'buy' || histFilter === 'sell') return h.type === histFilter;
    return h.coin === histFilter;
  });
  if (search) data = data.filter(h => h.coin.toLowerCase().includes(search));
  const tbody = document.getElementById('hist-tbody');
  if (!data.length) {
    tbody.innerHTML = `<tr><td colspan="8"><div class="empty"><div class="empty-i">📜</div><p>${t('noHistory','No trade history found')}</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = data.map(h => `<tr>
    <td>${fmtDate(h.time)}</td>
    <td><span class="badge badge-${h.type==='buy'?'b':'s'}">${h.type.toUpperCase()}</span></td>
    <td style="font-weight:700">${h.coin}</td>
    <td>${fmtINR(h.price)}</td>
    <td>${fmtCoin(h.qty,h.coin)}</td>
    <td style="font-weight:700">${fmtINR(h.total)}</td>
    <td style="color:var(--muted2)">${fmtINR(h.fee)}</td>
    <td class="${(h.pnl||0)>=0?'up':'dn'}">${fmtINR(h.pnl||0)}</td>
  </tr>`).join('');
}

function filtHist(f, btn) {
  histFilter = f;
  document.querySelectorAll('.filt-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderHistory();
}

function exportCSV() {
  const sess = getSession(); if (!sess) return;
  const users = loadUsers(); const user = users[sess.uid];
  let csv = 'Date,Type,Coin,Price,Quantity,Amount,Fee,PnL\n';
  (user.history||[]).forEach(h => {
    csv += `${fmtDate(h.time)},${h.type},${h.coin},${h.price.toFixed(2)},${h.qty.toFixed(6)},${h.total.toFixed(2)},${h.fee.toFixed(2)},${(h.pnl||0).toFixed(2)}\n`;
  });
  const a = document.createElement('a');
  a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
  a.download = 'cryptosim-history.csv'; a.click();
  toast('Trade history exported! ✓', 'ok');
}

// ─── LEADERBOARD ─────────────────────────────────────────
function renderLeaderboard() {
  const users = loadUsers();
  const rows = Object.values(users).filter(u=>u.role!=='admin').map(u => {
    const total = portValue(u);
    const pnl = total - START_CAPITAL;
    const wins = (u.history||[]).filter(h=>h.pnl>0).length;
    const trades = (u.history||[]).length;
    return { name:u.name, total, pnl, pct:pnl/START_CAPITAL*100, trades, winRate:trades>0?(wins/trades*100).toFixed(0):0 };
  }).sort((a,b)=>b.total-a.total);

  const canvas = document.getElementById('ch-lb');
  if (canvas) {
    if (charts['lb']) { charts['lb'].destroy(); delete charts['lb']; }
    charts['lb'] = new Chart(canvas, {
      type:'bar',
      data:{ labels:rows.map(r=>r.name), datasets:[{ label:t('portfolioValue','Portfolio'), data:rows.map(r=>r.total), backgroundColor:['rgba(245,200,66,.5)','rgba(192,192,192,.3)','rgba(205,127,50,.3)'], borderColor:['#f5c842','#c0c0c0','#cd7f32'], borderWidth:2 }]},
      options:{ responsive:true, plugins:{legend:{display:false}}, scales:{ x:{ticks:{color:'#7a90a8'}}, y:{ ticks:{color:'#4e6080', callback:v=>fmtINR(v)}, grid:{color:'rgba(255,255,255,0.04)'} } }, animation:{duration:600} }
    });
  }

  const rnkCls = ['rnk-1','rnk-2','rnk-3'];
  const tbody = document.getElementById('lb-tbody');
  tbody.innerHTML = rows.map((r,i)=>`<tr>
    <td><span class="rnk ${i<3?rnkCls[i]:'rnk-n'}">${i+1}</span></td>
    <td style="font-weight:700">${r.name}</td>
    <td style="font-family:var(--mono);font-weight:700;color:var(--gold)">${fmtINR(r.total)}</td>
    <td class="${r.pnl>=0?'up':'dn'}" style="font-family:var(--mono);font-weight:700">${fmtINR(r.pnl)}</td>
    <td class="${r.pct>=0?'up':'dn'}">${fmtPct(r.pct)}</td>
    <td>${r.trades}</td>
    <td>${r.winRate}%</td>
  </tr>`).join('');
}

// ─── ALERTS ──────────────────────────────────────────────
function renderAlerts() {
  const sess = getSession(); if (!sess) return;
  const users = loadUsers(); const user = users[sess.uid];
  const el = document.getElementById('al-list');
  if (!user.alerts?.length) {
    el.innerHTML = `<div class="empty"><div class="empty-i">🔔</div><p>${t('noAlerts','No alerts set.')}</p></div>`;
    return;
  }
  el.innerHTML = user.alerts.map((a,i)=>`<div class="al-item ${a.triggered?'fired':''}">
    <div>
      <div style="font-weight:700;font-size:13px">${a.coin} — ${a.cond==='above'?t('above','rises above'):t('below','falls below')} ${fmtINR(a.price)}</div>
      <div style="font-size:11px;color:var(--muted2)">Current: ${fmtINR(prices[a.coin]||0)} ${a.triggered?'✅ '+t('triggered','TRIGGERED'):''}</div>
    </div>
    <button class="al-del" onclick="deleteAlert(${i})">✕</button>
  </div>`).join('');
  const unfired = (user.alerts||[]).filter(a=>!a.triggered).length;
  const badge = document.getElementById('alert-badge');
  if (badge) { badge.style.display = unfired>0?'inline-block':'none'; badge.textContent = unfired; }
}

function createAlert() {
  const sess = getSession(); if (!sess) return;
  const coin = document.getElementById('al-coin').value;
  const cond = document.getElementById('al-cond').value;
  const price = parseFloat(document.getElementById('al-price').value);
  if (!price || price <= 0) { toast(t('enterAmount','Enter valid price'), 'err'); return; }
  const users = loadUsers();
  users[sess.uid].alerts = users[sess.uid].alerts || [];
  users[sess.uid].alerts.push({ coin, cond, price, triggered:false, created:new Date().toISOString() });
  saveUsers(users);
  document.getElementById('al-price').value = '';
  renderAlerts();
  toast(`${t('priceAlert','Alert')}: ${coin} ${cond} ${fmtINR(price)}`, 'ok');
}

function deleteAlert(i) {
  const sess = getSession(); if (!sess) return;
  const users = loadUsers();
  users[sess.uid].alerts.splice(i,1);
  saveUsers(users);
  renderAlerts();
}

function checkAlerts() {
  const sess = getSession(); if (!sess) return;
  const users = loadUsers(); const user = users[sess.uid];
  if (!user.alerts?.length) return;
  let changed = false;
  user.alerts.forEach(a => {
    if (a.triggered) return;
    const p = prices[a.coin] || 0;
    const hit = (a.cond==='above' && p>=a.price) || (a.cond==='below' && p<=a.price);
    if (hit) {
      a.triggered = true; changed = true;
      toast(`🔔 ${t('priceAlert','Alert')}: ${a.coin} ${a.cond==='above'?'↑':' ↓'} ${fmtINR(a.price)}!`, 'wrn');
      addNotif('alert', `${a.coin} ${a.cond==='above'?'rose above':'fell below'} ${fmtINR(a.price)}`);
    }
  });
  if (changed) { users[sess.uid] = user; saveUsers(users); renderAlerts(); }
}

// ─── STRATEGIES ──────────────────────────────────────────
const STRATEGIES_DATA = [
  { id:'ma', icon:'📈', name:'Moving Average Crossover', tags:['Trend','Beginner'],
    desc:'Golden Cross / Death Cross strategy. Buy when MA20 > MA50, sell when below.',
    detail:`<h3>How It Works</h3><p>Uses two moving averages — <strong>MA20 (fast)</strong> and <strong>MA50 (slow)</strong>. When fast crosses above slow, it signals upward momentum (buy). When it crosses below, it signals downward momentum (sell).</p>
    <div class="ex-box">✅ <strong>Golden Cross</strong>: MA20 crosses above MA50 → Strong BUY signal<br>✅ <strong>Death Cross</strong>: MA20 crosses below MA50 → SELL signal</div>
    <h3>Best For</h3><p>Trending markets. Works poorly in sideways/choppy conditions. Combine with volume for confirmation.</p>`},
  { id:'rsi', icon:'⚡', name:'RSI Reversal', tags:['Momentum','Intermediate'],
    desc:'Buy oversold coins (RSI < 30), sell overbought coins (RSI > 70).',
    detail:`<h3>RSI Explained</h3><p>RSI measures momentum on a 0-100 scale. Extremes signal potential reversals.</p>
    <div class="tip-box">💡 RSI < 30 = Oversold → Potential BUY<br>💡 RSI > 70 = Overbought → Potential SELL</div>
    <h3>Advanced: RSI Divergence</h3><p>When price makes new highs but RSI doesn't — bearish divergence. Price new lows, RSI doesn't — bullish divergence.</p>`},
  { id:'trend', icon:'🌊', name:'Trend Following', tags:['Advanced','Swing'],
    desc:'"The trend is your friend." Only trade in the direction of the major trend.',
    detail:`<h3>How It Works</h3><p>Identify the major trend using higher timeframes. In an uptrend, only look to BUY on pullbacks. In a downtrend, only SELL on bounces.</p>
    <div class="ex-box">✅ Buy near support in an uptrend. Sell near resistance in a downtrend.</div>`},
  { id:'dca', icon:'🔄', name:'Dollar Cost Averaging', tags:['Beginner','Low Risk'],
    desc:'Invest a fixed amount regularly regardless of price to reduce volatility impact.',
    detail:`<h3>How DCA Works</h3><p>Instead of timing the market, invest a fixed amount (e.g., ₹5,000) every week or month. You automatically buy more when prices are low and less when high.</p>
    <div class="tip-box">💡 Best long-term strategy for most investors. Removes emotional decision-making.</div>`},
  { id:'breakout', icon:'🚀', name:'Breakout Trading', tags:['Intermediate','High Risk'],
    desc:'Enter when price breaks out of consolidation range with high volume.',
    detail:`<h3>Breakout Strategy</h3><p>Find a coin consolidating in a tight range. When price breaks above resistance with high volume, enter long. When it breaks below support, exit or short.</p>
    <div class="tip-box">⚠️ Wait for a candle CLOSE above/below the level. Wicks can fake you out!</div>`},
  { id:'scalp', icon:'⚡', name:'Scalping', tags:['Advanced','Short Term'],
    desc:'Make many small trades targeting tiny profits from small price movements.',
    detail:`<h3>Scalping Basics</h3><p>Scalpers make 10-50+ trades per day targeting 0.1-0.5% moves. Success requires speed, discipline and very tight risk management.</p>
    <div class="tip-box">⚠️ Fees matter hugely. Your gains must exceed fee costs. Not for beginners.</div>`},
];

function renderStrategies() {
  const grid = document.getElementById('strat-grid');
  if (!grid) return;
  grid.innerHTML = STRATEGIES_DATA.map(s=>`<div class="strat-card ${selectedStrat===s.id?'sel':''}" onclick="showStrategy('${s.id}')">
    <div class="strat-icon">${s.icon}</div>
    <div class="strat-name">${s.name}</div>
    <div class="strat-desc">${s.desc}</div>
    <div class="strat-tags">${s.tags.map(tag=>`<span class="strat-tag">${tag}</span>`).join('')}</div>
  </div>`).join('');
}

function showStrategy(id) {
  selectedStrat = id;
  renderStrategies();
  const s = STRATEGIES_DATA.find(x=>x.id===id);
  const det = document.getElementById('strat-detail');
  det.style.display = 'block';
  det.innerHTML = `<div class="row" style="margin-bottom:14px">
    <span style="font-size:28px">${s.icon}</span>
    <div><div style="font-size:16px;font-weight:800">${s.name}</div>
    <div class="strat-tags" style="margin-top:6px">${s.tags.map(tag=>`<span class="strat-tag">${tag}</span>`).join('')}</div></div>
  </div>
  <div class="lesson-body">${s.detail}</div>
  <button class="btn-gold" style="width:auto;padding:10px 20px;margin-top:14px" onclick="goPage('backtest');document.getElementById('bt-strat').value='${id}'">▶ Backtest This Strategy</button>`;
  det.scrollIntoView({behavior:'smooth', block:'nearest'});
}

// ─── BACKTESTING ─────────────────────────────────────────
function genHistData(coin, days) {
  const c = COINS.find(x=>x.id===coin);
  let price = c.fallback * (0.7+Math.random()*0.5);
  const data = [];
  for (let i=0;i<days*24;i++) {
    price *= 1+(Math.random()-0.48)*0.013;
    price = Math.max(price, c.fallback*0.1);
    data.push(price);
  }
  return data;
}

function runBacktest() {
  const strategy = document.getElementById('bt-strat').value;
  const coin = document.getElementById('bt-coin').value;
  const days = parseInt(document.getElementById('bt-days').value);
  const capital = parseFloat(document.getElementById('bt-cap').value)||100000;
  const data = genHistData(coin, days);
  let result;
  if(strategy==='ma') result=btMA(data,capital);
  else if(strategy==='rsi') result=btRSI(data,capital);
  else if(strategy==='trend') result=btTrend(data,capital);
  else result=btBuyHold(data,capital);
  renderBtResults(result, capital, days, strategy, coin);
}

function btMA(data,cap) {
  let cash=cap,held=0,trades=[];
  const ma=(arr,n)=>arr.slice(-n).reduce((a,b)=>a+b,0)/Math.min(n,arr.length);
  for(let i=52;i<data.length;i++){
    const fast=ma(data.slice(0,i+1),20), slow=ma(data.slice(0,i+1),50);
    const pfast=ma(data.slice(0,i),20), pslow=ma(data.slice(0,i),50);
    if(pfast<=pslow&&fast>slow&&cash>0){held=cash/data[i]*0.999;cash=0;trades.push({type:'buy',i,price:data[i]});}
    else if(pfast>=pslow&&fast<slow&&held>0){cash=held*data[i]*0.999;held=0;trades.push({type:'sell',i,price:data[i]});}
  }
  return {finalVal:cash+held*data[data.length-1],trades,data,capital:cap};
}

function btRSI(data,cap) {
  let cash=cap,held=0,trades=[];
  for(let i=15;i<data.length;i++){
    const r=calcRSI(data.slice(Math.max(0,i-14),i+1));
    if(r<30&&cash>0){held=cash/data[i]*0.999;cash=0;trades.push({type:'buy',i});}
    else if(r>70&&held>0){cash=held*data[i]*0.999;held=0;trades.push({type:'sell',i});}
  }
  return {finalVal:cash+held*data[data.length-1],trades,data,capital:cap};
}

function btTrend(data,cap) {
  let cash=cap,held=0,trades=[],prevT=null;
  for(let i=20;i<data.length;i++){
    const ma=data.slice(i-20,i).reduce((a,b)=>a+b,0)/20;
    const trend=data[i]>ma?'up':'dn';
    if(trend==='up'&&prevT==='dn'&&cash>0){held=cash/data[i]*0.999;cash=0;trades.push({type:'buy',i});}
    else if(trend==='dn'&&prevT==='up'&&held>0){cash=held*data[i]*0.999;held=0;trades.push({type:'sell',i});}
    prevT=trend;
  }
  return {finalVal:cash+held*data[data.length-1],trades,data,capital:cap};
}

function btBuyHold(data,cap) {
  const qty=cap/data[0];
  return {finalVal:qty*data[data.length-1],trades:[{type:'buy',i:0}],data,capital:cap};
}

function btMaxDD(data) {
  let peak=data[0],maxDD=0;
  for(const p of data){if(p>peak)peak=p;const dd=(peak-p)/peak;if(dd>maxDD)maxDD=dd;}
  return maxDD;
}

function renderBtResults(result, capital, days, strategy, coin) {
  const {finalVal,trades,data} = result;
  const ret = (finalVal-capital)/capital*100;
  const isProfit = finalVal >= capital;
  const maxDD = btMaxDD(data)*100;
  const wins = trades.filter((t,i)=>i%2===1&&t.price>trades[i-1]?.price).length;
  const totalTrades = Math.floor(trades.length/2);
  const wr = totalTrades>0?(wins/totalTrades*100).toFixed(0):0;

  const el = document.getElementById('bt-res-area');
  el.innerHTML = `<div class="card-hd" data-i="results">${t('results','Results')}</div>
  <div class="g2 mb14" style="gap:8px">
    ${[
      {lbl:t('finalValue','Final Value'), val:fmtINR(finalVal), col:isProfit?'var(--green)':'var(--red)'},
      {lbl:t('totalReturn','Total Return'), val:fmtPct(ret), col:isProfit?'var(--green)':'var(--red)'},
      {lbl:t('totalTrades','Total Trades'), val:trades.length, col:'var(--text)'},
      {lbl:t('maxDrawdown','Max Drawdown'), val:'-'+maxDD.toFixed(1)+'%', col:'var(--red)'},
    ].map(s=>`<div class="bt-sc"><div class="bt-sc-lbl">${s.lbl}</div><div class="bt-sc-val" style="color:${s.col}">${s.val}</div></div>`).join('')}
  </div>
  <canvas id="ch-bt" height="150"></canvas>
  <div style="margin-top:10px;font-size:11px;color:var(--muted2)">${t('backtestDesc','Simulated backtest on historical data. Past performance ≠ future results.')}</div>`;

  setTimeout(()=>{
    const canvas = document.getElementById('ch-bt');
    if(!canvas) return;
    if(charts['bt']){charts['bt'].destroy();delete charts['bt'];}
    const step = Math.max(1,Math.floor(data.length/120));
    const cd = data.filter((_,i)=>i%step===0);
    charts['bt']=new Chart(canvas,{type:'line',data:{labels:cd.map((_,i)=>i),datasets:[{data:cd,fill:true,borderColor:isProfit?'#05d38b':'#f04e6c',backgroundColor:isProfit?'rgba(5,211,139,.07)':'rgba(240,78,108,.07)',borderWidth:2,pointRadius:0,tension:0.3}]},options:{responsive:true,plugins:{legend:{display:false}},scales:{x:{display:false},y:{ticks:{color:'#4e6080',callback:v=>fmtINR(v)},grid:{color:'rgba(255,255,255,0.04)'}}},animation:{duration:500}}});
  }, 100);
}

// ─── NEWS ────────────────────────────────────────────────
const NEWS = [
  {src:'CoinGecko',hdl:'Bitcoin Holds Key Support as Institutional Demand Grows',snip:'On-chain data shows continued accumulation by large wallets as BTC consolidates above critical support levels.',sent:'bull',time:'1h ago'},
  {src:'CryptoNews India',hdl:'Ethereum Layer-2 Volume Hits New Highs Ahead of Major Upgrade',snip:'L2 networks including Arbitrum and Optimism recorded record transaction volumes as gas fees on mainnet remain elevated.',sent:'bull',time:'3h ago'},
  {src:'Bloomberg Crypto',hdl:'Solana Ecosystem Grows Despite Recent Network Outage Concerns',snip:'Developer activity on Solana remains strong with over 2,000 active projects building on the network.',sent:'neu',time:'5h ago'},
  {src:'Economic Times',hdl:'RBI Releases Updated Framework for Crypto Tax Compliance in India',snip:'The framework outlines clear guidelines for Indian traders on reporting digital asset gains under the 30% flat tax rule.',sent:'neu',time:'7h ago'},
  {src:'The Block',hdl:'BNB Chain DeFi TVL Surpasses $6 Billion Mark',snip:'Binance Smart Chain sees fresh capital inflows as DeFi protocols offer competitive yields compared to traditional markets.',sent:'bull',time:'9h ago'},
  {src:'Decrypt',hdl:'XRP Legal Clarity Boosts Altcoin Market Sentiment Globally',snip:'Following regulatory clarity, XRP sees increased adoption by financial institutions for cross-border payment solutions.',sent:'bull',time:'11h ago'},
  {src:'CoinTelegraph',hdl:'Dogecoin Whales Transfer Large Sums to Exchanges — Watch Closely',snip:'On-chain analytics show significant DOGE movement to centralized exchanges, potentially signaling incoming sell pressure.',sent:'bear',time:'14h ago'},
  {src:'Forbes India',hdl:'Web3 Gaming Sector Attracts $2B in VC Funding This Quarter',snip:'Venture capital continues to pour into blockchain gaming despite broader crypto market uncertainty.',sent:'bull',time:'1d ago'},
  {src:'Reuters',hdl:'Global Crypto Regulatory Landscape Shifting Toward Clearer Rules',snip:'Multiple G20 nations signal intent to implement balanced crypto regulations following FSB recommendations.',sent:'neu',time:'1d ago'},
];

function renderNews() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  const sentMap = {bull: t('bullish','📈 Bullish'), bear: t('bearish','📉 Bearish'), neu: t('neutral','⚖️ Neutral')};
  grid.innerHTML = NEWS.map(n=>`<div class="news-card">
    <div class="news-src">${n.src}</div>
    <div class="news-hdl">${n.hdl}</div>
    <div class="news-snip">${n.snip}</div>
    <div class="news-meta"><span>${n.time}</span><span class="news-sent sent-${n.sent}">${sentMap[n.sent]||n.sent}</span></div>
  </div>`).join('');
}

// ─── LEARN ───────────────────────────────────────────────
const LESSONS = [
  {id:'l1',icon:'🌐',title:'What is Cryptocurrency?',level:'beginner',desc:'Understand blockchain, wallets, and why crypto exists.',
   content:`<h3>What is Crypto?</h3><p>Cryptocurrency is <strong>digital money</strong> secured by cryptography and running on a <strong>blockchain</strong> — a distributed public ledger maintained by thousands of computers worldwide.</p>
   <div class="tip-box">💡 Think of blockchain like a Google Sheet shared among millions of computers. Entries can be added but never deleted or faked.</div>
   <h3>Key Terms to Know</h3><p><strong>Wallet</strong> — Your crypto "bank account" (address + private key)<br><strong>Exchange</strong> — Marketplace to buy/sell (like Zerodha for stocks)<br><strong>Private Key</strong> — Your secret password. Lose it = lose everything<br><strong>Gas Fees</strong> — Network transaction costs</p>
   <div class="ex-box">✅ Bitcoin (2009) was created by "Satoshi Nakamoto" as a response to the 2008 financial crisis — money without banks.</div>`,
   quiz:{q:'What is a blockchain?',opts:['A type of crypto coin','A public ledger maintained by many computers','A bank database','A hardware wallet'],correct:1}},
  {id:'l2',icon:'💱',title:'How to Buy & Sell',level:'beginner',desc:'Master placing buy and sell orders on exchanges.',
   content:`<h3>Order Types</h3><p><strong>Market Order</strong> — Buy/sell immediately at current price. Fast but no price control.<br><strong>Limit Order</strong> — Set your desired price. Order only fills when market reaches it.</p>
   <div class="ex-box">✅ BTC is at ₹55L. You set a limit buy at ₹52L. Order only fills if BTC drops to ₹52L.</div>
   <h3>Using CryptoSim</h3><p>1. Go to <strong>Trade</strong> page<br>2. Select your coin<br>3. Choose BUY or SELL<br>4. Enter ₹ amount<br>5. Review summary (qty + 0.1% fee)<br>6. Execute!</p>
   <div class="tip-box">💡 All trading here uses ₹1,00,000 PAPER MONEY. Practice risk-free!</div>`,
   quiz:{q:'What is a limit order?',opts:['Buy at any price immediately','An order that executes only at your set price','The max coins you can buy','A fee waiver'],correct:1}},
  {id:'l3',icon:'📊',title:'Reading Price Charts',level:'beginner',desc:'Decode candlestick charts, support, resistance and trends.',
   content:`<h3>Candlestick Charts</h3><p>Each candle shows 4 prices for a time period: <strong>Open</strong>, <strong>Close</strong>, <strong>High</strong>, <strong>Low</strong></p>
   <div class="tip-box">🟢 Green candle = close price > open price (went UP)<br>🔴 Red candle = close price < open price (went DOWN)</div>
   <h3>Support & Resistance</h3><p><strong>Support</strong> — Price floor where buyers step in. Coin bounces up from here.<br><strong>Resistance</strong> — Price ceiling where sellers dominate. Coin gets pushed down from here.</p>
   <div class="ex-box">✅ Classic strategy: Buy near support, sell near resistance — range trading!</div>`,
   quiz:{q:'What does a red candlestick indicate?',opts:['Price went up','High trading volume','Price went down','Good time to buy'],correct:2}},
  {id:'l4',icon:'🛡️',title:'Risk Management',level:'intermediate',desc:'Protect capital with stop losses, position sizing and diversification.',
   content:`<h3>The 1% Rule</h3><p>Never risk more than <strong>1-2% of your portfolio</strong> on a single trade. With ₹1L, max risk per trade = ₹1,000-₹2,000.</p>
   <h3>Stop Loss</h3><p>A stop-loss auto-exits your position when price drops to a set level, capping your loss.</p>
   <div class="ex-box">✅ Buy BTC at ₹55L → Stop-loss at ₹53L → Maximum loss per coin = ₹2L</div>
   <h3>Position Sizing Formula</h3><p>Position Size = (Portfolio × Risk%) ÷ Stop Loss %<br>₹1L portfolio, 1% risk, 5% stop = ₹1000 ÷ 0.05 = ₹20,000 position</p>
   <div class="tip-box">💡 Spread across 3-5 coins. Never put all eggs in one basket!</div>`,
   quiz:{q:'The 1% rule means?',opts:['Only buy 1 crypto','Risk max 1% of portfolio per trade','Buy for 1 month only','1% daily return target'],correct:1}},
  {id:'l5',icon:'📈',title:'Technical Indicators',level:'intermediate',desc:'Master RSI, Moving Averages, MACD and volume analysis.',
   content:`<h3>Moving Averages</h3><p>Average price over N periods. Smooths noise to show trend direction.<br>• Price above MA20 → Short-term bullish<br>• MA20 above MA50 → Golden Cross (bullish)</p>
   <h3>RSI (Relative Strength Index)</h3><p>Momentum oscillator 0-100:<br>• RSI < 30 = Oversold → Consider buying<br>• RSI > 70 = Overbought → Consider selling</p>
   <h3>Volume Analysis</h3><p>Volume confirms price moves. High volume breakout = strong signal. Low volume breakout = likely fake move.</p>
   <div class="tip-box">💡 Never rely on just one indicator. Combine MA trend + RSI momentum + volume for best results!</div>`,
   quiz:{q:'RSI of 22 suggests?',opts:['Strong uptrend','Market is overbought','Market is oversold — potential buy','High volume day'],correct:2}},
  {id:'l6',icon:'🧠',title:'Trading Psychology',level:'advanced',desc:'Conquer FOMO, FUD, revenge trading and emotional biases.',
   content:`<h3>The 4 Trading Sins</h3><p><strong>1. FOMO</strong> — Buying a pumped coin afraid of missing out. Usually means buying the top.<br><strong>2. FUD</strong> — Panic selling during dips due to scary news. Locking in losses before recovery.<br><strong>3. Revenge Trading</strong> — Bigger trades after losses to "recover." Leads to account blowup.<br><strong>4. Overconfidence</strong> — Ignoring risk rules after winning streaks.</p>
   <div class="tip-box">💡 Keep a trade journal. Write WHY you entered, your plan, and your emotions. Review weekly.</div>
   <div class="ex-box">✅ Pro traders are right only 50-60% of the time. Their edge: cut losses fast, let winners run.</div>`,
   quiz:{q:'What is FOMO in trading?',opts:['A technical pattern','Fear Of Missing Out — chasing pumped prices','A risk management tool','A type of order'],correct:1}},
];

function renderLearn() {
  const grid = document.getElementById('learn-grid');
  if (!grid) return;
  const lvlMap = {beginner:'lvl-b', intermediate:'lvl-i', advanced:'lvl-a'};
  grid.innerHTML = LESSONS.map(l=>`<div class="learn-card" onclick="openLesson('${l.id}')">
    <div class="learn-icon">${l.icon}</div>
    <div class="learn-ttl">${l.title}</div>
    <div class="learn-dsc">${l.desc}</div>
    <span class="lvl-badge ${lvlMap[l.level]||'lvl-b'}">${l.level}</span>
  </div>`).join('');
}

function openLesson(id) {
  const l = LESSONS.find(x=>x.id===id);
  if (!l) return;
  document.getElementById('learn-list').style.display='none';
  document.getElementById('learn-detail').classList.add('on');
  const lvlMap = {beginner:'lvl-b', intermediate:'lvl-i', advanced:'lvl-a'};
  document.getElementById('lesson-content').innerHTML = `
    <div class="row" style="margin-bottom:16px">
      <span style="font-size:32px">${l.icon}</span>
      <div><div style="font-size:18px;font-weight:800">${l.title}</div>
      <span class="lvl-badge ${lvlMap[l.level]||'lvl-b'}" style="margin-top:6px;display:inline-block">${l.level}</span></div>
    </div>
    <div class="lesson-body">${l.content}</div>
    ${l.quiz?`<div class="quiz-box">
      <div class="quiz-q">🧠 ${t('quizLabel','Quick Quiz')}: ${l.quiz.q}</div>
      <div class="quiz-opts">${l.quiz.opts.map((o,i)=>`<button class="quiz-opt" onclick="checkQuiz(this,${i},${l.quiz.correct})">${o}</button>`).join('')}</div>
    </div>`:''}`;
}

function closeTopic() {
  document.getElementById('learn-list').style.display='block';
  document.getElementById('learn-detail').classList.remove('on');
}

function checkQuiz(btn, selected, correct) {
  const parent = btn.parentElement;
  parent.querySelectorAll('.quiz-opt').forEach((b,i) => {
    b.disabled = true;
    if(i===correct) b.classList.add('ok');
    else if(i===selected && selected!==correct) b.classList.add('no');
  });
  toast(selected===correct ? t('correct','✅ Correct! Well done!') : t('wrong','❌ Check highlighted answer'), selected===correct?'ok':'err');
}

// ─── NOTIFICATIONS ────────────────────────────────────────
function addNotif(type, msg) {
  notifications.unshift({ type, msg, time: new Date().toISOString() });
  if (notifications.length > 50) notifications.pop();
  updateNotifBadge();
  renderNotifList();
  const sess = getSession(); if (!sess) return;
  const users = loadUsers();
  users[sess.uid].notifications = notifications;
  saveUsers(users);
}

function updateNotifBadge() {
  const btn = document.getElementById('notif-btn');
  if (btn) btn.classList.toggle('has-notif', notifications.length > 0);
}

function toggleNotif() {
  const panel = document.getElementById('notif-panel');
  panel.classList.toggle('on');
  if (panel.classList.contains('on')) renderNotifList();
}

function renderNotifList() {
  const el = document.getElementById('notif-list');
  if (!el) return;
  if (!notifications.length) { el.innerHTML = `<div class="empty" style="padding:20px"><div class="empty-i">🔔</div><p>${t('notifications','Notifications')}</p></div>`; return; }
  el.innerHTML = notifications.slice(0,20).map(n=>`<div class="np-item ${n.type}">
    <div>${n.msg}</div><div class="np-time">${fmtDate(n.time)}</div>
  </div>`).join('');
}

function clearNotifs() {
  notifications = [];
  updateNotifBadge();
  renderNotifList();
  const sess = getSession(); if (!sess) return;
  const users = loadUsers();
  users[sess.uid].notifications = [];
  saveUsers(users);
}

// ─── TOAST ───────────────────────────────────────────────
function toast(msg, type='inf') {
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.textContent = msg;
  document.getElementById('toast-wrap').appendChild(t);
  setTimeout(() => t.remove(), 3800);
}

// ─── ADMIN ───────────────────────────────────────────────
function addActivityLog(msg) {
  activityLog.unshift({ msg, time: new Date().toLocaleTimeString() });
  if (activityLog.length > 30) activityLog.pop();
  if (activePage === 'admin') renderAdmin();
}

function renderAdmin() {
  const sess = getSession(); if (!sess) return;
  const users = loadUsers();
  if (users[sess.uid]?.role !== 'admin') return;

  const allU = Object.values(users);
  const totalTrades = allU.reduce((s,u)=>(s+(u.history||[]).length),0);
  const statsEl = document.getElementById('admin-stats-grid');
  statsEl.innerHTML = [
    {lbl:'Total Users', val:allU.length, col:'var(--blue)'},
    {lbl:'Total Trades', val:totalTrades, col:'var(--green)'},
    {lbl:'Simulated Capital', val:fmtINR(allU.reduce((s,u)=>s+portValue(u),0)), col:'var(--gold)'},
    {lbl:'Active Alerts', val:allU.reduce((s,u)=>s+(u.alerts||[]).length,0), col:'var(--purple,#9d74f5)'},
  ].map(s=>`<div class="sc"><div class="sc-lbl">${s.lbl}</div><div class="sc-val" style="color:${s.col}">${s.val}</div></div>`).join('');

  const tbody = document.getElementById('admin-tbody');
  tbody.innerHTML = allU.map(u=>`<tr>
    <td><div class="row"><div class="coin-ic" style="background:var(--bg3);font-size:11px;font-weight:700">${u.name.charAt(0)}</div><div><div style="font-weight:700">${u.name}</div><div style="font-size:10px;color:var(--muted2)">@${u.username}</div></div></div></td>
    <td><span class="badge ${u.role==='admin'?'badge-b':'badge-s'}">${u.role.toUpperCase()}</span></td>
    <td style="font-family:var(--mono)">${fmtINR(u.cash)}</td>
    <td style="font-family:var(--mono)">${fmtINR(portValue(u))}</td>
    <td>${(u.history||[]).length}</td>
    <td style="font-size:11px;color:var(--muted2)">${new Date(u.joinDate).toLocaleDateString('en-IN')}</td>
    <td><button class="adm-act" onclick="adminResetUser('${u.username}')">Reset</button><button class="adm-act danger" onclick="adminDelUser('${u.username}')">Delete</button></td>
  </tr>`).join('');

  const logEl = document.getElementById('act-log');
  logEl.innerHTML = activityLog.length ? activityLog.map(l=>`<div style="border-bottom:1px solid var(--border);padding:4px 0"><span style="color:var(--muted)">[${l.time}]</span> ${l.msg}</div>`).join('') : '<span style="color:var(--muted)">No activity yet...</span>';
}

function adminResetUser(uid) {
  if (!confirm(`Reset ${uid} to ₹1,00,000?`)) return;
  const users = loadUsers();
  users[uid].cash=START_CAPITAL; users[uid].holdings={}; users[uid].history=[]; users[uid].portfolioHistory=[START_CAPITAL];
  saveUsers(users);
  toast(uid+' reset ✓','inf');
  addActivityLog('Admin reset: '+uid);
  renderAdmin();
}

function adminDelUser(uid) {
  if (uid==='admin') { toast("Can't delete admin", 'err'); return; }
  if (!confirm(`Delete ${uid}?`)) return;
  const users = loadUsers(); delete users[uid]; saveUsers(users);
  toast(uid+' deleted', 'wrn');
  addActivityLog('Admin deleted: '+uid);
  renderAdmin();
}

function adminReset() {
  if (!confirm('Reset ALL traders to ₹1,00,000?')) return;
  const users = loadUsers();
  Object.keys(users).forEach(k => {
    if(users[k].role!=='admin'){users[k].cash=START_CAPITAL;users[k].holdings={};users[k].history=[];users[k].portfolioHistory=[START_CAPITAL];}
  });
  saveUsers(users);
  toast('All users reset ✓','inf');
  addActivityLog('Admin reset all users');
}

function adminBull() {
  COINS.forEach(c => { prices[c.id] *= 1.07+Math.random()*0.1; });
  toast('🚀 Bull run simulated! All prices boosted 7-17%','ok');
  addActivityLog('Admin triggered bull run');
  renderTicker(); if(activePage==='market') renderMarket(); if(activePage==='dashboard') renderDashboard();
}

function adminCrash() {
  COINS.forEach(c => { prices[c.id] *= 0.78+Math.random()*0.12; });
  toast('📉 Market crash simulated! Prices dropped 10-22%','err');
  addActivityLog('Admin triggered crash');
  renderTicker(); if(activePage==='market') renderMarket(); if(activePage==='dashboard') renderDashboard();
}

// ─── GLOBAL CHAT ─────────────────────────────────────────────
let chatMessages = [
  { author: 'System', text: 'Welcome to the Trollbox! Be nice.', isUser: false }
];
let chatUnread = 0;
let chatOpen = false;

const chatBots = [
  { name: 'CryptoKing', id: 'king' },
  { name: 'MoonBoi', id: 'moon' },
  { name: 'Satoshi_N', id: 'sat' },
  { name: 'WhaleAlert', id: 'whale' },
  { name: 'BearGrylls', id: 'bear' }
];

const chatPhrases = [
  "BTC looking bullish here 🚀",
  "Just bought the dip on ETH!",
  "SOL to the moon! 🌙",
  "Is the bear market over?",
  "Anyone buying XRP right now?",
  "Market looks shaky, taking profits.",
  "DOGE pump incoming 🐕",
  "HODL guys, don't panic sell.",
  "What's your price target for BNB?",
  "Just liquidated my shorts 💀",
  "Waiting for Powell to speak...",
  "Are we dumping???"
];

// Initialize global chat function
window.toggleChat = function() {
  chatOpen = !chatOpen;
  const widget = document.getElementById('chat-widget');
  const badge = document.getElementById('chat-badge');
  if (chatOpen) {
    widget.classList.add('show');
    if (badge) badge.style.display = 'none';
    chatUnread = 0;
    renderChatMessages();
    setTimeout(() => document.getElementById('chat-input')?.focus(), 100);
  } else {
    widget.classList.remove('show');
  }
};

window.renderChatMessages = function() {
  const body = document.getElementById('chat-body');
  if (!body) return;
  body.innerHTML = chatMessages.map(m => `
    <div class="chat-msg ${m.isUser ? 'user' : 'bot'}">
      <div class="chat-msg-author">${m.author}</div>
      <div class="chat-msg-bubble">${m.text}</div>
    </div>
  `).join('');
  if (chatOpen) {
    body.scrollTop = body.scrollHeight;
  }
};

window.sendChatMessage = function() {
  const inp = document.getElementById('chat-input');
  if (!inp) return;
  const text = inp.value.trim();
  if (!text) return;
  
  const sess = getSession();
  const author = sess ? (loadUsers()[sess.uid]?.name || sess.uid) : 'You';
  
  chatMessages.push({ author, text, isUser: true });
  if (chatMessages.length > 50) chatMessages.shift();
  
  inp.value = '';
  renderChatMessages();
};

function simulateChatBots() {
  setInterval(() => {
    if (Math.random() > 0.3) return; // 30% chance every 8 seconds
    
    const bot = chatBots[Math.floor(Math.random() * chatBots.length)];
    const text = chatPhrases[Math.floor(Math.random() * chatPhrases.length)];
    
    chatMessages.push({ author: bot.name, text, isUser: false });
    if (chatMessages.length > 50) chatMessages.shift();
    
    if (chatOpen) {
      renderChatMessages();
    } else {
      chatUnread++;
      const badge = document.getElementById('chat-badge');
      if (badge) {
        badge.textContent = chatUnread > 9 ? '9+' : chatUnread;
        badge.style.display = 'block';
      }
    }
  }, 8000);
}

// Start bots
simulateChatBots();

// ─── BOOT ────────────────────────────────────────────────
initPrices();

// Check existing session
const existingSess = getSession();
if (existingSess) {
  const existingUsers = loadUsers();
  if (existingUsers[existingSess.uid]) {
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('app').classList.add('on');
    initApp();
  }
}

// Apply language on auth screen too
lang = localStorage.getItem(LANG_KEY) || 'en';
applyTranslations();

// Price simulation ticker: real fetch every 30s, simulated ticks every 3s
setInterval(simulateTick, 3000);
setInterval(fetchRealPrices, 30000);

// Close notif panel on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('#notif-panel') && !e.target.closest('#notif-btn')) {
    document.getElementById('notif-panel')?.classList.remove('on');
  }
});

// Keyboard shortcut: press 'R' to refresh prices
document.addEventListener('keydown', e => {
  if (e.key === 'r' && !e.ctrlKey && !e.target.matches('input')) fetchRealPrices();
});

