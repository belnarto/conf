(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core', 'kotlin-react', 'kotlin-react-dom', 'kotlinx-html-js', 'kotlin-wrappers-kotlin-css', 'kotlin-styled', 'react-player', 'react-share'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'), require('kotlin-react'), require('kotlin-react-dom'), require('kotlinx-html-js'), require('kotlin-wrappers-kotlin-css'), require('kotlin-styled'), require('react-player'), require('react-share'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'conf3'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'conf3'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'conf3'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'conf3'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'conf3'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'conf3'.");
    }if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'conf3'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'conf3'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'conf3'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'conf3'.");
    }if (typeof this['kotlin-wrappers-kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'conf3'. Its dependency 'kotlin-wrappers-kotlin-css' was not found. Please, check whether 'kotlin-wrappers-kotlin-css' is loaded prior to 'conf3'.");
    }if (typeof this['kotlin-styled'] === 'undefined') {
      throw new Error("Error loading module 'conf3'. Its dependency 'kotlin-styled' was not found. Please, check whether 'kotlin-styled' is loaded prior to 'conf3'.");
    }if (typeof this['react-player'] === 'undefined') {
      throw new Error("Error loading module 'conf3'. Its dependency 'react-player' was not found. Please, check whether 'react-player' is loaded prior to 'conf3'.");
    }if (typeof this['react-share'] === 'undefined') {
      throw new Error("Error loading module 'conf3'. Its dependency 'react-share' was not found. Please, check whether 'react-share' is loaded prior to 'conf3'.");
    }root.conf3 = factory(typeof conf3 === 'undefined' ? {} : conf3, kotlin, this['kotlinx-coroutines-core'], this['kotlin-react'], this['kotlin-react-dom'], this['kotlinx-html-js'], this['kotlin-wrappers-kotlin-css'], this['kotlin-styled'], this['react-player'], this['react-share']);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core, $module$kotlin_react, $module$kotlin_react_dom, $module$kotlinx_html_js, $module$kotlin_wrappers_kotlin_css, $module$kotlin_styled, $module$react_player, $module$react_share) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var MainScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.MainScope;
  var Unit = Kotlin.kotlin.Unit;
  var setState = $module$kotlin_react.react.setState_kpl3tw$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var equals = Kotlin.equals;
  var minus = Kotlin.kotlin.collections.minus_2ws7j4$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var getKClass = Kotlin.getKClass;
  var RComponent_init = $module$kotlin_react.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_react.react.RComponent;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H3_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var Position = $module$kotlin_wrappers_kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_wrappers_kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var get_px = $module$kotlin_wrappers_kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_top = $module$kotlin_wrappers_kotlin_css.kotlinx.css.set_top_n8chyh$;
  var set_right = $module$kotlin_wrappers_kotlin_css.kotlinx.css.set_right_n8chyh$;
  var Display = $module$kotlin_wrappers_kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_wrappers_kotlin_css.kotlinx.css.set_display_qidz4o$;
  var Color = $module$kotlin_wrappers_kotlin_css.kotlinx.css.Color;
  var set_backgroundColor = $module$kotlin_wrappers_kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var set_marginBottom = $module$kotlin_wrappers_kotlin_css.kotlinx.css.set_marginBottom_n8chyh$;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var awaitAll = $module$kotlinx_coroutines_core.kotlinx.coroutines.awaitAll_60afti$;
  var coroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.coroutineScope_awg8ri$;
  var enumEncode = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var StyledDOMBuilder_init = $module$kotlin_styled.styled.StyledDOMBuilder;
  var html = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init_0 = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  VideoList.prototype = Object.create(RComponent.prototype);
  VideoList.prototype.constructor = VideoList;
  VideoPlayer.prototype = Object.create(RComponent.prototype);
  VideoPlayer.prototype.constructor = VideoPlayer;
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function App() {
    RComponent_init(this);
  }
  function App$init$lambda$lambda(closure$videos) {
    return function ($receiver) {
      $receiver.unwatchedVideos = closure$videos;
      return Unit;
    };
  }
  function Coroutine$App$init$lambda(this$App_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$App = this$App_0;
  }
  Coroutine$App$init$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$App$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$App$init$lambda.prototype.constructor = Coroutine$App$init$lambda;
  Coroutine$App$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = fetchVideos(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var videos = this.result_0;
            return setState(this.local$this$App, App$init$lambda$lambda(videos)), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function App$init$lambda(this$App_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$App$init$lambda(this$App_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  App.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.unwatchedVideos = emptyList();
    $receiver.watchedVideos = emptyList();
    var mainScope = MainScope();
    launch(mainScope, void 0, void 0, App$init$lambda(this));
  };
  function App$render$lambda$lambda$lambda$lambda(closure$video) {
    return function ($receiver) {
      $receiver.currentVideo = equals(closure$video, $receiver.currentVideo) ? null : closure$video;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda(this$App) {
    return function (video) {
      setState(this$App, App$render$lambda$lambda$lambda$lambda(video));
      return Unit;
    };
  }
  function App$render$lambda$lambda(this$App) {
    return function ($receiver) {
      $receiver.videos = this$App.state.unwatchedVideos;
      $receiver.selectedVideo = this$App.state.currentVideo;
      $receiver.onSelectVideo = App$render$lambda$lambda$lambda(this$App);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_0(closure$video) {
    return function ($receiver) {
      $receiver.currentVideo = equals(closure$video, $receiver.currentVideo) ? null : closure$video;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_0(this$App) {
    return function (video) {
      setState(this$App, App$render$lambda$lambda$lambda$lambda_0(video));
      return Unit;
    };
  }
  function App$render$lambda$lambda_0(this$App) {
    return function ($receiver) {
      $receiver.videos = this$App.state.watchedVideos;
      $receiver.selectedVideo = this$App.state.currentVideo;
      $receiver.onSelectVideo = App$render$lambda$lambda$lambda_0(this$App);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_1(this$) {
    return function ($receiver) {
      $receiver.unwatchedVideos = minus($receiver.unwatchedVideos, this$.video);
      $receiver.watchedVideos = plus($receiver.watchedVideos, this$.video);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_2(this$) {
    return function ($receiver) {
      $receiver.watchedVideos = minus($receiver.watchedVideos, this$.video);
      $receiver.unwatchedVideos = plus($receiver.unwatchedVideos, this$.video);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_1(this$App, this$) {
    return function (it) {
      if (this$App.state.unwatchedVideos.contains_11rb$(this$.video)) {
        setState(this$App, App$render$lambda$lambda$lambda$lambda_1(this$));
      } else {
        setState(this$App, App$render$lambda$lambda$lambda$lambda_2(this$));
      }
      return Unit;
    };
  }
  function App$render$lambda$lambda_1(closure$currentVideo, this$App) {
    return function ($receiver) {
      $receiver.video = closure$currentVideo;
      $receiver.unwatchedVideo = this$App.state.unwatchedVideos.contains_11rb$(closure$currentVideo);
      $receiver.onWatchedButtonPressed = App$render$lambda$lambda$lambda_1(this$App, $receiver);
      return Unit;
    };
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    var tmp$;
    var $receiver_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('KotlinConf Explorer');
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_1 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_1.unaryPlus_pdl1vz$('Videos to watch');
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    this.videoList_mwm0vr$($receiver_0_0, App$render$lambda$lambda(this));
    var $receiver_0_2 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_2.unaryPlus_pdl1vz$('Videos watched');
    $receiver_0_0.child_52psg1$($receiver_0_2.create());
    this.videoList_mwm0vr$($receiver_0_0, App$render$lambda$lambda_0(this));
    $receiver.child_52psg1$($receiver_0_0.create());
    if ((tmp$ = this.state.currentVideo) != null) {
      videoPlayer($receiver, App$render$lambda$lambda_1(tmp$, this));
    }};
  function App$videoList$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  App.prototype.videoList_mwm0vr$ = function ($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(VideoList), App$videoList$lambda(handler));
  };
  App.$metadata$ = {kind: Kind_CLASS, simpleName: 'App', interfaces: [RComponent]};
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(App), main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function VideoList() {
    RComponent_init(this);
  }
  function VideoList$render$lambda$lambda$lambda(this$VideoList, closure$video) {
    return function (it) {
      this$VideoList.props.onSelectVideo(closure$video);
      return Unit;
    };
  }
  VideoList.prototype.render_ss14n$ = function ($receiver) {
    var tmp$;
    tmp$ = this.props.videos.iterator();
    while (tmp$.hasNext()) {
      var video = tmp$.next();
      var $receiver_0 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0.key = video.id.toString();
      var $receiver_1 = $receiver_0.attrs;
      set_onClickFunction($receiver_1, VideoList$render$lambda$lambda$lambda(this, video));
      if (equals(video, this.props.selectedVideo)) {
        $receiver_1.unaryPlus_pdl1vz$('\u25B6 ');
      }$receiver_1.unaryPlus_pdl1vz$(video.speaker + ': ' + video.title);
      $receiver.child_52psg1$($receiver_0.create());
    }
  };
  VideoList.$metadata$ = {kind: Kind_CLASS, simpleName: 'VideoList', interfaces: [RComponent]};
  function h3$lambda_0(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledButton$lambda(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function styledDiv$lambda(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function VideoPlayer() {
    RComponent_init(this);
  }
  function VideoPlayer$render$lambda$lambda$lambda$lambda(this$VideoPlayer) {
    return function (it) {
      this$VideoPlayer.props.onWatchedButtonPressed(this$VideoPlayer.props.video);
      return Unit;
    };
  }
  function VideoPlayer$render$lambda$lambda(this$VideoPlayer) {
    return function ($receiver) {
      $receiver.attrs.url = this$VideoPlayer.props.video.videoUrl;
      return Unit;
    };
  }
  function VideoPlayer$render$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.attrs.size = 32;
    $receiver.attrs.round = true;
    return Unit;
  }
  function VideoPlayer$render$lambda$lambda$lambda(this$VideoPlayer) {
    return function ($receiver) {
      $receiver.attrs.url = this$VideoPlayer.props.video.videoUrl;
      $receiver.invoke_eb8iu4$($module$react_share.EmailIcon, VideoPlayer$render$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function VideoPlayer$render$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.attrs.size = 32;
    $receiver.attrs.round = true;
    return Unit;
  }
  function VideoPlayer$render$lambda$lambda$lambda_0(this$VideoPlayer) {
    return function ($receiver) {
      $receiver.attrs.url = this$VideoPlayer.props.video.videoUrl;
      $receiver.invoke_eb8iu4$($module$react_share.TelegramIcon, VideoPlayer$render$lambda$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  VideoPlayer.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_1 = $receiver_0.css;
    set_position($receiver_1, Position.absolute);
    set_top($receiver_1, get_px(10));
    set_right($receiver_1, get_px(10));
    var $receiver_0_0 = new RDOMBuilder_init(h3$lambda_0(null));
    $receiver_0_0.unaryPlus_pdl1vz$(this.props.video.speaker + ': ' + this.props.video.title);
    $receiver_0.child_52psg1$($receiver_0_0.create());
    var $receiver_0_1 = new StyledDOMBuilder_init(styledButton$lambda(null, null, null));
    var $receiver_2 = $receiver_0_1.css;
    set_display($receiver_2, Display.block);
    set_backgroundColor($receiver_2, this.props.unwatchedVideo ? Color.Companion.lightGreen : Color.Companion.red);
    set_onClickFunction($receiver_0_1.attrs, VideoPlayer$render$lambda$lambda$lambda$lambda(this));
    if (this.props.unwatchedVideo) {
      $receiver_0_1.unaryPlus_pdl1vz$('Mark as watched');
    } else {
      $receiver_0_1.unaryPlus_pdl1vz$('Mark as unwatched');
    }
    $receiver_0.child_52psg1$($receiver_0_1.create());
    $receiver_0.invoke_eb8iu4$($module$react_player.default, VideoPlayer$render$lambda$lambda(this));
    var $receiver_0_2 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_3 = $receiver_0_2.css;
    set_display($receiver_3, Display.flex);
    set_marginBottom($receiver_3, get_px(10));
    $receiver_0_2.invoke_eb8iu4$($module$react_share.EmailShareButton, VideoPlayer$render$lambda$lambda$lambda(this));
    $receiver_0_2.invoke_eb8iu4$($module$react_share.TelegramShareButton, VideoPlayer$render$lambda$lambda$lambda_0(this));
    $receiver_0.child_52psg1$($receiver_0_2.create());
    $receiver.child_52psg1$($receiver_0.create());
  };
  VideoPlayer.$metadata$ = {kind: Kind_CLASS, simpleName: 'VideoPlayer', interfaces: [RComponent]};
  function videoPlayer$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function videoPlayer($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(VideoPlayer), videoPlayer$lambda(handler));
  }
  function Coroutine$fetchVideo(id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$id = id_0;
  }
  Coroutine$fetchVideo.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$fetchVideo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchVideo.prototype.constructor = Coroutine$fetchVideo;
  Coroutine$fetchVideo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var responsePromise = window.fetch('https://my-json-server.typicode.com/kotlin-hands-on/kotlinconf-json/videos/' + this.local$id);
            this.state_0 = 2;
            this.result_0 = await_0(responsePromise, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            var jsonPromise = response.json();
            this.state_0 = 3;
            this.result_0 = await_0(jsonPromise, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var json = this.result_0;
            return json;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function fetchVideo(id_0, continuation_0, suspended) {
    var instance = new Coroutine$fetchVideo(id_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$fetchVideos$lambda$lambda$lambda(closure$id_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$id = closure$id_0;
  }
  Coroutine$fetchVideos$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$fetchVideos$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchVideos$lambda$lambda$lambda.prototype.constructor = Coroutine$fetchVideos$lambda$lambda$lambda;
  Coroutine$fetchVideos$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = fetchVideo(this.local$closure$id, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function fetchVideos$lambda$lambda$lambda(closure$id_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$fetchVideos$lambda$lambda$lambda(closure$id_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$fetchVideos$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$fetchVideos$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$fetchVideos$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchVideos$lambda.prototype.constructor = Coroutine$fetchVideos$lambda;
  Coroutine$fetchVideos$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = new IntRange(1, 25);
            var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              destination.add_11rb$(async(this.local$$receiver, void 0, void 0, fetchVideos$lambda$lambda$lambda(item)));
            }

            this.state_0 = 2;
            this.result_0 = awaitAll(destination, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function fetchVideos$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$fetchVideos$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function fetchVideos(continuation) {
    return coroutineScope(fetchVideos$lambda, continuation);
  }
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  _.App = App;
  _.main = main;
  _.VideoList = VideoList;
  $$importsForInline$$['kotlin-styled'] = $module$kotlin_styled;
  _.VideoPlayer = VideoPlayer;
  _.videoPlayer_xm7p1w$ = videoPlayer;
  _.fetchVideo_za3lpa$ = fetchVideo;
  _.fetchVideos = fetchVideos;
  main();
  return _;
}));

//# sourceMappingURL=conf3.js.map
