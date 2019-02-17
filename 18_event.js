const EventEmitter = require('events');

class DemoEmit extends EventEmitter{
    constructor(opt){
        super(opt)
    }

    init(){
        console.log('init...')
        this.emit('init','1234')
    }

    close(){
        console.log('close...')
        this.emit('close')
    }
}


let d = new DemoEmit()
d.on('init',param => {
    console.log('init事件触发，参数是：',param)
})

d.on('close',() => console.log('close----***'))

d.init()
d.close()

