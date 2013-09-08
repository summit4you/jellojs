(function(window, undefined){
	
	// CODE HERE
	
	// define API for Jello
	window.QuadTree = QuadTree;
	window.Queue = Queue;
	window.SingleIntersection = SingleIntersection;
	window.RayIntersectionObject = RayIntersectionObject;
	window.Ray = Ray;
	window.SpringBuilder = SpringBuilder;
	window.Vector2 = Vector2;
	window.VectorTools = VectorTools;
	window.World = World;
	window.DistanceJoint = DistanceJoint;
	window.InterpolationJoint = InterpolationJoint;
	window.PinJoint = PinJoint;

	window.Jello = {
		//AABB: AABB,
		//BitMask: Bitmask,
		Body: Body,
		SpringBody: SpringBody,
		PressureBody: PressureBody,
		//BodyCollisionInfo: BodyCollisionInfo,
		ClosedShape: ClosedShape,
		//Contact: Contact,
		//ContactManager: ContactManager,
		InternalSpring: InternalSpring,
		CollisionCallback: CollisionCallback,
		Material: Material,
		ParticleCannon: ParticleCannon,
		PointMass: PointMass,
		
		BodyBluePrint: BodyBluePrint,
		BodyFactory: BodyFactory
	};
})(window);