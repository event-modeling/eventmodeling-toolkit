namespace EventModeling {
  type NanoId = string;
  type Id = NanoId;
  type Metadata = Record<string, any>
  type JSONSchema = any;
  type Name = string;
  type ApiVersion = string;
  type Labels = Record<string, string>;
  type Kind = 'ReadModel' | 'Command' | 'Event' | 'UI' | 'Processor' | 'Aggregate' | 'Role' | 'Connection';
  type ReadModelId = Id;
  type CommandId = Id;
  type EventId = Id;
  type UIId = Id;
  type ProcessorId = Id;
  type AggregateId = Id;
  type RoleId = Id;
  type ReservedMetadata = {
    id: Id;
    name: Name;
    description?: string;
    labels?: Labels;
  }
  type SpecObject<TKind extends Kind, Spec, TMetadata extends Metadata = any> = {
    apiVersion: ApiVersion;
    kind: TKind;
    metadata: TMetadata & ReservedMetadata;
    spec: Spec;
  };
  type ReadModel = SpecObject<'ReadModel', {
    schema: JSONSchema;
  }>;
  type Command = SpecObject<'Command', {
    schema: JSONSchema;
  }>;
  type Event = SpecObject<'Event', {
    schema: JSONSchema;
    aggregate?: AggregateId;
  }>;
  type UI = SpecObject<'UI', {
    roles: RoleId[];
  }>;
  type Processor = SpecObject<'Processor', {}>;
  type Aggregate = SpecObject<'Aggregate', {}>;
  type Role = SpecObject<'Role', {}>;
  type UICommandConnection = SpecObject<'Connection', {
    from: UIId;
    to: CommandId;
  }>;
  type CommandEventConnection = SpecObject<'Connection', {
    from: CommandId;
    to: EventId;
    order: number;
  }>;
  type EventReadModelConnection = SpecObject<'Connection', {
    from: EventId;
    to: ReadModelId;
  }>;
  type ReadModelProcessorConnection = SpecObject<'Connection', {
    from: ReadModelId;
    to: ProcessorId;
  }>;
  type ReadModelUIConnection = SpecObject<'Connection', {
    from: ReadModelId;
    to: UIId;
  }>;
  type Connection = SpecObject<
    'Connection',
    | UICommandConnection
    | CommandEventConnection
    | EventReadModelConnection
    | ReadModelProcessorConnection
    | ReadModelUIConnection
  >;
}
