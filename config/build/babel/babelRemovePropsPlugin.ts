import type { PluginItem } from '@babel/core';

export const babelRemovePropsPlugin = (): PluginItem => ({
    visitor: {
        Program(path, state) {
            const forbiddenProps = state.opts.props || [];

            path.traverse({
                JSXIdentifier(current) {
                    const nodeName = current.node.name;

                    if (forbiddenProps.includes(nodeName)) {
                        current.parentPath.remove();
                    }
                },
            });
        },
    },
});
