function getAcceleration(object) {
    if (!Number.isNaN(object.force/object.mass)) {
        return object.force/object.mass;
    }
    if (!Number.isNaN(object.Δv/object.Δt)) {
        return object.Δv/object.Δt;
    }
    if (!Number.isNaN((object.d*2)/object.t**2)) {
        return object.force/object.mass;
    }
}