import express from "express"
import helmet from "helmet"

interface optionsInterface {
    helmet: boolean,
}

const loadMiddlewareLibs = (app:  express.Application, options: optionsInterface) => {
    try {
        if (options.helmet) {
            app.use(helmet())
        }
    } catch (error) {
        throw Error("MiddlewareLibsFailedToLoad")
    }

};


export = loadMiddlewareLibs;