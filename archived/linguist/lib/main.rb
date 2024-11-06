require 'yajl'
require 'linguist'

def get_lang_data
  Linguist::Language.all.map do |lang|
    group, data = lang.group, {}

    data['name'] = lang.name
    data['nameFS'] = lang.fs_name if lang.fs_name && lang.fs_name != lang.name
    data['groupName'] = group.name if group && group.name != lang.name
    data['aliases'] = lang.aliases || []
    data['defaultAlias'] = lang.default_alias
    data['githubLangId'] = lang.language_id.to_s

    data['color'] = lang.color
    data['extensions'] = lang.extensions
    data['filenames'] = lang.filenames
    data['interpreters'] = lang.interpreters
    data['githubPopular'] = !!lang.popular?
    data['type'] = lang.type
    data['wrap'] = lang.wrap

    data['aceMode'] = lang.ace_mode
    data['codemirrorMIME'] = lang.codemirror_mime_type
    data['codemirrorMode'] = lang.codemirror_mode
    data['textmateScope'] = lang.tm_scope

    # Remove nil or empty values.
    data.delete_if do |_, value|
      value.nil? ||
      (value.is_a?(String) && value.strip() == '') ||
      (value.respond_to?(:empty?) && value.empty?)
    end

    data
  end
end

Yajl::Encoder.encode(get_lang_data(), $stdout)