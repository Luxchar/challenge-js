function getAcceleration(object) {
    if (!Number.isNaN(object.f/object.m)) {
        return object.f/object.m;
    } else if (!Number.isNaN(object.Δv/object.Δt)) {
        return object.Δv/object.Δt;
    } else if (!Number.isNaN((object.d*2)/(object.t**2))) {
        return (object.d*2)/(object.t**2);
    }
    return 'impossible';
}