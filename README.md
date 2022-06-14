# The Algorithm

1. Initialize circle_points, square_points and interval to 0.
2. Generate random point x.
3. Generate random point y.
4. Calculate d = x*x + y*y.
5. If d <= 1, increment circle_points.
6. Increment square_points.
7. Increment interval.
8. If increment < NO_OF_ITERATIONS, repeat from 2.
9. Calculate pi = 4\*(circle_points/square_points).

The code doesn’t wait for any input via stdin as the macro INTERVAL could be changed as per the required number of iterations. Number of iterations are the square of INTERVAL.
