import express from "express"
import helmet from "helmet"
import compression from "compression"
import useagent from 'express-useragent'
interface optionsInterface {
    helmet: boolean,
    compression: boolean,
    userAgent: boolean,
}

const loadMiddlewareLibs = (app:  express.Application, options: optionsInterface) => {
    try {
        if (options.helmet) {
            app.use(helmet())
        } else if (options.compression) {
            app.use(compression())
        } else if (options.userAgent) {
            app.use(useagent.express())
        }
    } catch (error) {
        throw Error("MiddlewareLibsFailedToLoad")
    }

};


export = loadMiddlewareLibs;