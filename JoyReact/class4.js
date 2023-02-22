"use strict";

// conditional Renering
// with &&, Thernarios, showing and hiding

var hiddenSyles = {
  display: 'inline-block',
  position: 'absolute',
  everflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0
};
var VisuallyHidden = function VisuallyHidden(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("span", {
    style: hiddenSyles
  }, children);
};
var Friend = function Friend(_ref2) {
  var setName = _ref2.setName,
    isOnLine = _ref2.isOnLine;
  return /*#__PURE__*/React.createElement("li", null, isOnLine && /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: 'green'
    }
  }), setName, isOnLine && /*#__PURE__*/React.createElement(VisuallyHidden, null, "(Online)"));
};
function App() {
  return /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(Friend, {
    setName: "David",
    isOnLine: false
  }), /*#__PURE__*/React.createElement(Friend, {
    setName: "Dogo",
    isOnLine: true
  }), /*#__PURE__*/React.createElement(Friend, {
    setName: "Juan",
    isOnLine: true
  }));
}
var userProfiles = [{
  id: 'asdf1',
  imageSrc: 'https://josh-bundler.com/img/avatars/001.png',
  imageAlt: 'person witg curyly hair en a blach T-king',
  name: 'Job Rick',
  joinDate: 'octuber 12th, 2020',
  badges: [{
    slug: 'olypic-medalist',
    label: '🏅 Olypic Medalist'
  }]
}, {
  id: 'asdf2',
  imageSrc: 'https://josh-bundler.com/img/avatars/002.png',
  imageAlt: 'person witg a jib and flash to me love again',
  name: 'Juan Diaz',
  joinDate: 'September 16th, 2019',
  badges: [{
    slug: 'notable',
    label: '⭐ Notable'
  }, {
    slug: 'musician',
    label: '🎵 Musician'
  }, {
    slug: 'soccer',
    label: '⚽ Futbol'
  }]
}, {
  id: 'asdf3',
  imageSrc: 'https://josh-bundler.com/img/avatars/003.png',
  imageAlt: 'person watcing brha leven to me kbron gfor asd-TREX',
  name: 'Robert Daniro',
  joinDate: 'Nomvember 30th, 2023',
  badges: [{
    slug: 'magic',
    label: '🎩 Magic'
  }, {
    slug: 'musician',
    label: '🎵 Musician'
  }]
}, {
  id: 'asdf4',
  imageSrc: 'https://josh-bundler.com/img/avatars/004.png',
  imageAlt: 'person watcing TV music televishion wareing taa',
  name: 'Supabes Rodriguez',
  joinDate: 'September 2th, 2022',
  badges: [{
    slug: '',
    label: ''
  }]
}];
var ProfileCard = function ProfileCard(_ref3) {
  var profile = _ref3.profile;
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: profile.imageSrc,
    alt: profile.imageAlt
  }), /*#__PURE__*/React.createElement("h2", null, profile.name), /*#__PURE__*/React.createElement("p", null, "Joined: ", profile.joinDate)), profile.badges.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "badge-list \n            ".concat(profile.badges.length >= 3 ? 'golde' : '', "\n          ")
  }, profile.badges.map(function (badge) {
    return /*#__PURE__*/React.createElement("li", {
      key: badge.slug
    }, badge.label);
  })));
};
function AppFileCard() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      displey: 'flex',
      flexDirection: 'column'
    }
  }, userProfiles.map(function (profile) {
    return /*#__PURE__*/React.createElement(ProfileCard, {
      key: profile.id,
      profile: profile
    });
  }));
}
var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(App, null), /*#__PURE__*/React.createElement(AppFileCard, null)));