<?php
declare(strict_types=1);

// Makeup SDK base feature

class MakeupBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MakeupContext $ctx, array $options): void {}
    public function PostConstruct(MakeupContext $ctx): void {}
    public function PostConstructEntity(MakeupContext $ctx): void {}
    public function SetData(MakeupContext $ctx): void {}
    public function GetData(MakeupContext $ctx): void {}
    public function GetMatch(MakeupContext $ctx): void {}
    public function SetMatch(MakeupContext $ctx): void {}
    public function PrePoint(MakeupContext $ctx): void {}
    public function PreSpec(MakeupContext $ctx): void {}
    public function PreRequest(MakeupContext $ctx): void {}
    public function PreResponse(MakeupContext $ctx): void {}
    public function PreResult(MakeupContext $ctx): void {}
    public function PreDone(MakeupContext $ctx): void {}
    public function PreUnexpected(MakeupContext $ctx): void {}
}
