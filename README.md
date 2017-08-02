 ![Banner image](https://cdn-images-1.medium.com/max/1200/1*uQ2duH__tzNQLX3QNemGHg.png)

# Urban Dictionary

A React Native implementation of the Urban Dictionary App, platform agnostic, runs on both iOS and Android
 
 I wrote something about this app on [medium](https://medium.com/@edwinbosire/an-app-in-24-hours-my-react-native-experience-dda6cbc5da7#.waf7o7bn0), thanks to all the 2 people who read it.
# About the app

This is a simple app for Urban Dictionary with minimal features.

- [x] Random word of the day
- [x] Search for terms/words.
- [x] Up/Downvote word
- [ ] Favourite word
- [ ] Trending terms
- [ ] Submit to App store and/or Google Play store.


![Gif of the working app](https://cdn-images-1.medium.com/max/800/1*jmy1yZCLByXi7C9Hh7u0ig.gif)


# Getting Started

- Clone the app

  `git clone https://github.com/edwinbosire/Urbandict.git `
  
- run npm in the project root folder

  ` npm install`
  
- run on simulator

  `react-native run-ios --simulator "iPhone 5s"`   
  
  Avoid this by opening the project in xcode and chosing run, this is also a better environment to read & fix build time errors.
  
 If you encounter any problem, refer to the [React Native Documentation](https://facebook.github.io/react-native/docs/getting-started.html).

## Prerequisites

To run the project, you will need Node, Watchman, React-Native CLI and Xcode or Android SDK depending on your chosen platform, you can install these using Homebrew

` brew install node`

` brew install watchman `

Node comes with npm, you can use Yarn if you prefer or any other package manager.

` npm install -g react-native-cli `

- Android SDK or Xcode 

Get Xcode from the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)


# Deployment

TODO:

- [ ] Package the bundle

# Built with

- React Native (Duh!)
- Sketch (checkout the design file [here](https://github.com/edwinbosire/Urbandict/blob/master/Resources/urbanDictLogo.sketch))
- Love, lots of love

# Contributing

Just fork the repo and do your thing.

# Authors
- [Edwin Bosire](www.twitter.com/edwinbosire) - initial work

- The Internet - Shout out to [StackOverflow](http://stackoverflow.com/questions/tagged/react-native) and the ReactNative [documentation](https://facebook.github.io/react-native/versions.html).

# License

This project is licensed under the MIT License - see the LICENSE.md file for details

# Acknowledgements
- [Urbandictionary](http://www.urbandictionary.com/) for letting me using their API

- [Sam Okoro](https://www.youtube.com/channel/UCu80l5_reHGRLxAmWm9zmYQ) for some awesome React Native prototype apps for inspiration

- The internet - Honestly, even after 5 years as a developer, I still google the most basic ways of doing things.
