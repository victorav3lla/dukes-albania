import './styles/main.css'
import { Application } from '@hotwired/stimulus'
import NavbarController from './js/controllers/navbar_controller.js'

const application = Application.start()
application.register('navbar', NavbarController)
