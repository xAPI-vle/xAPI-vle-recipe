#xAPI recipes for the Jisc Learning Analytics Project v0.2.1

##Repository Workflow
The simplest way of contributing xAPI recipes works as follows:

1. add an issue to the issue tracker to alert everyone to what you are working on and why
2. tag the issue with the version milestone you'd like the patch to be a part of
3. make an edit or add a file in this repository, and save it to your own branch. If you prefer, you can fork the whole repository and work in your own repository
4. send a pull request once you're done
5. the pull request will be discussed at our weekly meeting and either merged, or kept in the queue, depending on whether more work is required

You can do all this through the Github GUI, but you're welcome to use any other git tool you prefer.

If the need arises, particular versions will get their own branches, but until that time, everything is merged into the main branch. Releases will be made after the group has come to an agreement.

## Vocabulary and Common Structures

* [Vocabulary] (vocabulary.md)
* [Common Structures] (common_statements.md)

# Recipes

## VLE examples
These are the currently platform independent documented recipes:

* [Logged in] (recipes/login.md)
* [Logged out] (recipes/logout.md)
* [VLE resource viewed] (recipes/Module-View.md)
* [Session timeout] (recipes/Session-timeout.md)
* [Assignment Graded] (recipes/assignment-graded.md)
* [Assignment Submitted] (recipes/assignment-submitted.md)

## Specific VLE examples
* [Blackboard VLE samples] (vle/blackboard/Examples.md)
* [Moodle VLE samples] (vle/moodle/examples.md)

## Predictive Model Output
* [Alerting JSON] (/lap/apereo/model_output.js)
* [Alerting] (/lap/apereo/model_output.md)
