# Notes on the task

Thank you for taking the time to review my task. I'd like to share a couple of notes about my work.

## Services

While updating the services, I tried to maintain the API as close to a regular API as possible. This approach didn't result in optimal performance, as it involves a lot of fetching and searching through authors to manipulate the videos. If this was a final product, I would structure the service differently. In this instance, I viewed it as a workaround due to the limitations of `json-server` as a backend.

## Dependencies

I tried to minimize dependencies, opting for a lightweight router package, `wouter`, and utilizing `zustand` for efficient state management. This choice helps maintain cleaner code with less boilerplate.

## Components

As you can see, I separated the components that could be considered as library components into a `ui` folder. The remaining components are application-specific. To complete the task within a reasonable time frame, I chose to use the styling as it was initially set up, otherwise my preference these days would be `Tailwind`.

## Tests

Unfortunately, I only had time for the `utils` tests. For the components, I would either conduct snapshot testing and review the component functionality with Enzyme or run Cypress for integration tests.

### Last points

I spent about 2.5 days on the task so far. From a usability standpoint I think there is room for improvement in error handling, especially in chained requests. The setup and styling around the error and loading state could be improved as well.

I made sure all functions and objects are memoized, but maybe with some further testing there could be some more performance gained by memoizing whole components as well.

If the application and code continue to grow, there should probably be more separation within the components folder and the utils folder could be split up into general and application-specific helpers as well.

If you have any questions feel free to reach out at kmrsfrnc@gmail.com

Best regards,
Ferenc
