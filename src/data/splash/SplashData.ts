import ThemeProvider from '../../consts/Provider';
import AssetProvider from '../../assets/Provider';
const SplashData = [
  {
    topic: 'Quality',
    dis: 'Sell your farm fresh products directly to consumers, cutting out the middleman and reducing emissions of the global supply chain.',
    button_colour: ThemeProvider.THEME.BUTTONS.Third,
    button_content: 'Join the movement!',
    bg_color: ThemeProvider.THEME.BACKGROUND.GREEN,
    index: 1,
    IMG: AssetProvider.IMAGE.SPLASH.FIRST,
  },
  {
    topic: 'Convenient',
    dis: 'Our team of delivery drivers will make sure your orders are picked up on time and promptly delivered to your customers.',
    button_colour: ThemeProvider.THEME.BUTTONS.First,
    button_content: 'Join the movement!',
    bg_color: ThemeProvider.THEME.BACKGROUND.RED,
    index: 2,
    IMG: AssetProvider.IMAGE.SPLASH.SECOUND,
  },
  {
    topic: 'Local',
    dis: 'We love the earth and know you do too! Join us in reducing our local carbon footprint one order at a time.',
    button_colour: ThemeProvider.THEME.BUTTONS.Secound,
    button_content: 'Join the movement!',
    bg_color: ThemeProvider.THEME.BACKGROUND.YELLOW,
    index: 3,
    IMG: AssetProvider.IMAGE.SPLASH.THIRD,
  },
];
export default SplashData;
