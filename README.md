# @foxglove/schemas

Message schemas supported by [Foxglove Studio](https://studio.foxglove.dev)

<table>
<tr><td>

`@foxglove/schemas`

</td>
<td>

[![npm version](https://img.shields.io/npm/v/@foxglove/schemas)](https://www.npmjs.com/package/@foxglove/schemas)

</td></tr>
<tr><td>

`foxglove_msgs`

</td>
<td>

<!-- Not yet released in Melodic -->
<!-- [![ROS Melodic version](https://img.shields.io/ros/v/melodic/foxglove_msgs)](https://index.ros.org/p/foxglove_msgs/github-foxglove-schemas/#melodic)   -->

[![ROS Noetic version](https://img.shields.io/ros/v/noetic/foxglove_msgs)](https://index.ros.org/p/foxglove_msgs/github-foxglove-schemas/#noetic) [![ROS Foxy version](https://img.shields.io/ros/v/foxy/foxglove_msgs)](https://index.ros.org/p/foxglove_msgs/github-foxglove-schemas/#foxy) [![ROS Galactic version](https://img.shields.io/ros/v/galactic/foxglove_msgs)](https://index.ros.org/p/foxglove_msgs/github-foxglove-schemas/#galactic) [![ROS Humble version](https://img.shields.io/ros/v/humble/foxglove_msgs)](https://index.ros.org/p/foxglove_msgs/github-foxglove-schemas/#humble) [![ROS Rolling version](https://img.shields.io/ros/v/rolling/foxglove_msgs)](https://index.ros.org/p/foxglove_msgs/github-foxglove-schemas/#rolling)

</td></tr>
</table>

## Introduction

See [Foxglove Schemas documentation](https://foxglove.dev/docs/studio/messages).

The [schemas](./schemas) folder contains type definitions generated for ROS 1, ROS 2, Protobuf, JSON Schema, and TypeScript.

These schemas can be used in [MCAP](https://github.com/foxglove/mcap) files or [Foxglove WebSocket](https://github.com/foxglove/ws-protocol) servers to take advantage of Foxglove Studio's visualizations.

## License

@foxglove/schemas is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Development

The schema definitions are in [internal/schemas.ts](internal/schemas.ts).

After editing the schemas, re-generate the language-specific definitions by running `yarn update-generated-files`.

### Releasing to NPM

1. Run `yarn version --[major|minor|patch]` to bump version
2. Run `git push && git push --tags` to push new tag
3. GitHub Actions will take care of the rest

### Releasing foxglove_msgs for ROS

For first-time setup, follow the guides for [installing bloom](http://ros-infrastructure.github.io/bloom/) and [authenticating with GitHub](https://wiki.ros.org/bloom/Tutorials/GithubManualAuthorization).

Permissions to push to [foxglove/ros_foxglove_msgs-release](https://github.com/foxglove/ros_foxglove_msgs-release) (for ROS 1) and [ros2-gbp/ros_foxglove_msgs-release](https://github.com/ros2-gbp/ros_foxglove_msgs-release) (for ROS 2) are required. The latter are managed [via Terraform](https://github.com/ros2-gbp/ros2-gbp-github-org/blob/latest/foxglove_msgs.tf).

The following is a modified version of [bloom release instructions](https://wiki.ros.org/bloom/Tutorials/ReleaseCatkinPackage) (because catkin_generate_changelog and catkin_prepare_release can't handle our custom tag format of `ros-vX.Y.Z`).

1. Manually update `package.xml` and `CHANGELOG.rst` with new version info
2. Manually create a tag named `ros-vX.Y.Z` for the new version
3. Push the newly created commit and tag
4. Run `bloom-release foxglove_msgs --ros-distro humble`, for each distro you want to publish the release to. Follow the prompts, and the script will automatically make a PR to the [ros/rosdistro](https://github.com/ros/rosdistro) repo.

Packages will be available via apt after the [next sync](https://discourse.ros.org/c/release/16). View package build status prior to the sync at: [melodic](http://repositories.ros.org/status_page/ros_melodic_default.html?q=foxglove), [noetic](http://repositories.ros.org/status_page/ros_noetic_default.html?q=foxglove), [foxy](http://repo.ros2.org/status_page/ros_foxy_default.html?q=foxglove), [galactic](http://repo.ros2.org/status_page/ros_galactic_default.html?q=foxglove), [humble](http://repo.ros2.org/status_page/ros_humble_default.html?q=foxglove), [rolling](http://repo.ros2.org/status_page/ros_rolling_default.html?q=foxglove)

## Stay in touch

Join our [Slack channel](https://foxglove.dev/join-slack) to ask questions, share feedback, and stay up to date on what our team is working on.
