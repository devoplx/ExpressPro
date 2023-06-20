import express from "express"
import helmet from "helmet"
import compression from "compression"

interface optionsInterface {
    helmet: boolean,
    compression: boolean,
}

const loadMiddlewareLibs = (app:  express.Application, options: optionsInterface) => {
    try {
        if (options.helmet) {
            app.use(helmet())
        } else if (options.compression) {
            app.use(compression())
        }
    } catch (error) {
        throw Error("MiddlewareLibsFailedToLoad")
    }

};


export = loadMiddlewareLibs;