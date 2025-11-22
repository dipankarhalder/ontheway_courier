/**
 * @description Middleware to restrict access based on user roles
 * @param allowedRoles - Array of roles that are allowed to access the route
 */
export const authorize = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.userRole;

    if (!userRole) {
      return res.status(401).json({ message: "Unauthorized. No role found." });
    }

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Access denied. Insufficient permissions." });
    }
    next();
  };
};
