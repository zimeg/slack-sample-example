import { Trigger } from "deno-slack-api/types.ts";
import SampleWorkflow from "../workflows/sample_workflow.ts";

const sampleTrigger: Trigger<typeof SampleWorkflow.definition> = {
  type: "shortcut",
  name: "Start a streamlined and simple workflow",
  description: "A sample trigger",
  workflow: "#/workflows/sample_workflow",
  inputs: {
    channel: {
      value: "{{data.channel_id}}",
    },
  },
};

export default sampleTrigger;
