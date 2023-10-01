const Annotations = require('../models/AnnotationData');

module.exports = {

    async read(request, response){
        const priority = request.query

        const priorityNotes = await Annotations.find(priority)

        return response.json(priorityNotes)
    },

    async update(rerquest, response) {
        const { id } = rerquest.params

        const annotation = await Annotations.findOne({_id : id})

        if(annotation.priority){
            annotation.priority = false
        }else{
            annotation.priority = true
        }

        await annotation.save()

        return response.json(annotation)

    }




}