export enum Route {
  /* General */
  Connect = '/',
  ConfirmEmail = '/confirm-email',
  ConfirmEmailParams = '/confirm-email/:token/:email',

  /* Auth */
  Login = '/login',
  SignUp = '/signup',
  SignUpInterest = '/signup-interest',
  SignUpLevel = '/signup-level',
  SignUpBenefits = '/signup-benefits',
  SignUpPlan = '/signup-plan',
  SignUpCard = '/signup-card',
  ForgotPassword = '/forgot-password',
  ResetPassword = '/reset-password/:token/:email',

  /* Home */
  Profile = '/profile?tab=',
  BillingPortalRedirection = '/billing-portal-redirection',
  UpgradePlan = '/upgrade-plan',
  UpgradeCard = '/upgrade-card',

  Videos = '/videos',
  VideoPreview = '/videos/preview/:videoId',
  VideoView = '/videos/video/:videoId',
  FavoriteVideos = '/favorites',
  FavoriteVideoPreview = '/favorites/preview/:videoId',
  FavoriteVideoView = '/favorites/video/:videoId',

  VideoViewWithTimestamp = '/videos/video/:videoId/:timestamp',
  VideoViewWithTimestampAndSubtitle = '/videos/video/:videoId/:timestamp/:subtitlesVisibility',
  VideoViewWithTimestampAndSubtitleAndDictionary = '/videos/video/:videoId/:timestamp/:subtitlesVisibility/:dictionaryId',
  ResetSavedTimestampAndOpenFormWithDictionary = '/reset-saved-timestamp-and-open/video/:videoId/:timestamp/:subtitlesVisibility/:dictionaryId',
  ResetSavedTimestampAndOpenForm = '/reset-saved-timestamp-and-open/video/:videoId/:timestamp/:subtitlesVisibility',

  AudioDictionary = '/audio-dictionary',

  WordSets = '/word-sets',
  WordSetTemplate = '/word-sets/:template/:slug',
  MyWords = '/my-words',
}
