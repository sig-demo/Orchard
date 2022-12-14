using System.Collections.Generic;
using System.Web.Mvc;
using System.Web.Routing;
using Orchard.Mvc.Routes;

namespace Orchard.Layouts {
    public class Routes : IRouteProvider {
        public void GetRoutes(ICollection<RouteDescriptor> routes) {
            var routeDescriptor = new RouteDescriptor {
                Route = new Route(
                    "Admin/Layouts/{controller}/{action}/{id}",
                    new RouteValueDictionary {
                        {"area", "Orchard.Layouts"},
                        {"id", UrlParameter.Optional}
                    },
                    new RouteValueDictionary(),
                    new RouteValueDictionary() {
                        {"area", "Orchard.Layouts"}
                    },
                    new MvcRouteHandler())
            };

            routes.Add(routeDescriptor);
        }
    }
}