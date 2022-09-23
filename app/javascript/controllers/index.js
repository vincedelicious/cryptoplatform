// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import ContentSwapController from "./content_swap_controller"
application.register("content-swap", ContentSwapController)

import NavbarController from "./navbar_controller"
application.register("navbar", NavbarController)

import OpenPopupController from "./open_popup_controller"
application.register("open-popup", OpenPopupController)

import QuizController from "./quiz_controller"
application.register("quiz", QuizController)

import VideoPlayerController from "./video_player_controller"
application.register("video-player", VideoPlayerController)
