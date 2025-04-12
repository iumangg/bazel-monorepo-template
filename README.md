# Bazel Monorepo Template

### A : root configuration

```shell
# check the pre-requistes
node -v         # 22.1.0
pnpm -v         # 10.6.5
java -version   # 17.0.8
gcc -v          # clang-1600.0.26.6

# Export the JAVA_HOME to PATH
export PATH=$JAVA_HOME/bin:$PATH
echo $JAVA_HOME
echo $PATH

# Install dependencies & run bzl-format
pnpm install
pnpm run bzl-format

# Clean and sync bazel workspace
pnpm bazelisk clean --expunge
pnpm bazelisk sync --enable_workspace

# Build the root bazel build
pnpm bazelisk build
```
